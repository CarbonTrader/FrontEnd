export function getAllInvestorCreditRecords() {
    let credit_records = [
        {
            "project_name": "Proyecto Alpha",
            "carbontrader_serial": "1"
        },
        {
            "project_name": "Proyecto Beta",
            "carbontrader_serial": "2"
        },
        {
            "project_name": "Proyecto Delta",
            "carbontrader_serial": "3"
        },
        {
            "project_name": "Proyecto Epsilon",
            "carbontrader_serial": "4"
        },
        {
            "project_name": "Proyecto Theta",
            "carbontrader_serial": "5"
        },
        {
            "project_name": "Proyecto Alpha",
            "carbontrader_serial": "1"
        },
        {
            "project_name": "Proyecto Beta",
            "carbontrader_serial": "2"
        },
        {
            "project_name": "Proyecto Delta",
            "carbontrader_serial": "3"
        },
        {
            "project_name": "Proyecto Epsilon",
            "carbontrader_serial": "4"
        },
        {
            "project_name": "Proyecto Theta",
            "carbontrader_serial": "5"
        },
        {
            "project_name": "Proyecto Alpha",
            "carbontrader_serial": "1"
        },
        {
            "project_name": "Proyecto Beta",
            "carbontrader_serial": "2"
        },
        {
            "project_name": "Proyecto Delta",
            "carbontrader_serial": "3"
        },
        {
            "project_name": "Proyecto Epsilon",
            "carbontrader_serial": "4"
        },
        {
            "project_name": "Proyecto Theta",
            "carbontrader_serial": "5"
        }
    ]
    return credit_records
}

export function getInvestorProfileInfo() {
    let investor = {
        "first_name": "Cristóbal",
        "last_name": "Castrillón",
        "email": "email123@gmail.com",
        "password": "122445",
        "transactions": [
            {
                "buyer_pk": "64f6796080e9d292...",
                "carbontrader_serial": "1",
                "hash": "1",
                "seller_pk": "b99bb445c1721382...",
                "timestamp": "111",
                "transaction_type": "Compra"
            },
            {
                "buyer_pk": "64f6796080e9d292...",
                "carbontrader_serial": "1",
                "hash": "1",
                "seller_pk": "0592b0b489e78ba1...",
                "timestamp": "222",
                "transaction_type": "Compra"
            },
            {
                "buyer_pk": "ecf80ad14629dba8...",
                "carbontrader_serial": "1",
                "hash": "1",
                "seller_pk": "64f6796080e9d292...",
                "timestamp": "333",
                "transaction_type": "Venta"
            }
        ],
    }
    return investor;
}