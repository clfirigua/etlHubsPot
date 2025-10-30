export const buildLeadSearchBody = () => {
    return {
        "filterGroups": [
            {
                "filters": [
                    {
                        "propertyName": "lifecyclestage",
                        "operator": "EQ",
                        "value": "lead"
                    }
                ]
            }
        ],
        "properties": ["email", "firstname", "lastname", "lifecyclestage"]
    }
}