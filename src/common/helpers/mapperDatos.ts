import { DataType } from "../enums/dataType"


const getyear = (value: string): number => {
    return getDate(value).getFullYear()
}

const getMonth = (value: string): number => {
    return getDate(value).getMonth() + 1
}

const getNumer = (value: string): number => {
    return +value
}

const getDate = (value: string): Date => {
    return new Date(value)
}

const getBoolean = (value: string): Boolean => {
    return value == "true" ? true : false
}



export const MapperDatos = (data: Record<string, any>, transformData: Record<string, DataType>) => {
    const library = {
        "NUMBER": getNumer,
        "DATE": getDate,
        "BOOLEAN": getBoolean,
        "MONTH": getMonth,
        "YEAR": getyear
    }
    const keysType = Object.keys(transformData);
    const newtransformData = {}
    for (const key in keysType) {
        newtransformData[key] = library[transformData[key]](data[key])
    }

    return newtransformData
}

