//탑승할 버스운행정보
export type getBusStationRequest = {
    routeno: string,
    startStation: string
}
export type getBusStationResponse = {
    "arrmsg1": string;
    "busId1": string;
    "vehicleno1": string;
    "arrmsg2": string;
    "busId2": string;
    "vehicleno2": string;
    "busRouteAbrv": string;
    "busType1": string;
    "busType2": string;
}
//출발지-목적지 버스운행정보
export type getStationEndRequest = {
    startStation: string,
    endStation: string
}
export type getStationEndResponse = {
    firstStartStation: string;
    lastEndStation: string;
    busNumber: string;
    totalTime: number;
}[]


export type getDataAllResponse =
    {
        "illumination_data":
        [{ "illumination": number, "water_level": number, "time": string }],
        "temperature_air_data":
        [{ "temperature": number, "air_humid": number, "time": string }],
        "soil_data": [{ "soil_humid": number, "time": string }]
    }

export type getDataLogResponse =
    {
        "logs": [
            {
                "opcode": "LED_ON",
                "time": string
            },
            {
                "opcode": "LED_OFF",
                "time": string
            }
        ]
    }


export type getDataImageResponse =
    {
        "files":
        [{ id: number, file_path: string, upload_at: string }],

    }

