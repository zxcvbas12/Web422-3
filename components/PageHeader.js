import { Card } from "react-bootstrap"

export default function PageHeader({text}) {
    return (
        <>
            <Card className="bg-light">
                <strong><Card.Body>{text}</Card.Body></strong>
            </Card>
            <br />
        </>
    )
}