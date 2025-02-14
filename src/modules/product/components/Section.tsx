import { GraphicalTypeEnum, DataFieldType, KeyDataField } from '@/core/utils/types'
import { getDPPData} from '@/core/utils/functions'
import { BatteryCellScan, CellChemistry, CredentialSubject, Data, MaterialFile } from '@/modules/product/types'
import { BooleanField, TextField, FilesField, FileReport, PanelContainer } from './ui'
import Graph from './Graph'

function getSectionElements({ field, data }: { field: DataFieldType, data: Data }) {
    switch (field.type) {
        case GraphicalTypeEnum.Boolean:
            return <BooleanField key={field.title} field={field} value={data as boolean}/>

        case GraphicalTypeEnum.Number:
        case GraphicalTypeEnum.Date:
        case GraphicalTypeEnum.Text:
            return <TextField key={field.title} field={field} value={data as string}/>

        case GraphicalTypeEnum.File:
            return <FilesField key={field.title} files={data as MaterialFile[]} field={field} />

        case GraphicalTypeEnum.FileReport:
            return <FileReport key={field.title} file={data as BatteryCellScan} />

        case GraphicalTypeEnum.Graph:
            return <PanelContainer key={field.title} field={field}>
                <Graph data={data as CellChemistry} />
        </PanelContainer>

        case GraphicalTypeEnum.Panel:
            return <PanelContainer key={field.title} field={field}>
                {(Object.keys(data) as KeyDataField[])
                    .sort((a, b) => getDPPData(b).type.localeCompare(getDPPData(a).type))
                    .map((subKey, index) => (
                        <div key={index} >
                            {getSectionElements({ field: getDPPData(subKey), data: data[subKey as keyof Data] })}
                        </div>
                    )
                )}
            </PanelContainer>
    
        case GraphicalTypeEnum.NoRender:
        default:
            return
    }
}

export default function Section({ data }: { data: CredentialSubject }) {
    const fieldKeys = Object.keys(data).reduce(
        (acc, key) => {
          const field = getDPPData(key)
          if ([GraphicalTypeEnum.NoRender, GraphicalTypeEnum.Panel, GraphicalTypeEnum.Graph, GraphicalTypeEnum.File].includes(field.type)) {
            acc.compoundValueKeys.push(key)
          } else {
            acc.scalarValueKeys.push(key)
          }
          return acc
        },
        { 
            scalarValueKeys: [],
            compoundValueKeys: []
        } as { scalarValueKeys: Array<string>, compoundValueKeys: Array<string> }
    )

    return <>
        { fieldKeys.scalarValueKeys.length > 0 &&
            <PanelContainer
                field={{ title: 'Product Details', type: GraphicalTypeEnum.NoRender, layout: { colSpan: 4 }}}
                className='grid gap-6 lg:grid-cols-3 grid-cols-1'
            >
                { fieldKeys.scalarValueKeys
                    .sort((a, b) => getDPPData(b).type.localeCompare(getDPPData(a).type))
                    .map(key => getSectionElements({ field: getDPPData(key), data: data[key as keyof Data] }))
                }
            </PanelContainer>
        }
        { fieldKeys.compoundValueKeys
            .map(key =>
                getSectionElements({ field: getDPPData(key), data: data[key as keyof Data] })
            )
        }
    </>
}
