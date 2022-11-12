import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/react";

interface CardProps {
    title: String;
    date?: String;
    time?: String;
    subtitle: String;
    location?: String;
    img?: String;
    chapter?: number;
}

const Card: React.FC<CardProps> = ({title, date, time, subtitle, location, chapter, img}: CardProps) => {

    return (
        <IonCard>
            {img && (<img alt="book cover" className="image" src={img + ""}/>)}
            <IonCardHeader>
                <IonCardTitle>{title}</IonCardTitle>
                <IonCardSubtitle>{subtitle}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                {location && <p>{location}</p>}
                {date && time && <p>{date + " | " + time}</p>}
                {chapter && <p>{"Chapter: " + chapter}</p>}
            </IonCardContent>
        </IonCard>
    )
}

export default Card