import {
    IonContent,
    IonHeader, IonIcon,
    IonItem, IonLabel,
    IonList,
    IonListHeader,
    IonPage,
    IonSearchbar,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {arrowForwardCircleOutline} from "ionicons/icons";

const Club: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Clubs</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Clubs</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList>
                    <IonListHeader>
                        <IonLabel>Your Clubs</IonLabel>
                    </IonListHeader>
                    <IonItem>
                        <IonLabel>Diva-e's Club</IonLabel>
                        <IonIcon icon={arrowForwardCircleOutline}></IonIcon>
                    </IonItem>
                    <IonItem>
                        <IonLabel>HTW FB4 Club</IonLabel>
                        <IonIcon icon={arrowForwardCircleOutline}></IonIcon>
                    </IonItem>
                </IonList>
                <IonList>
                    <IonListHeader>
                        <IonLabel>Discover new Clubs</IonLabel>
                    </IonListHeader>
                </IonList>
                <IonSearchbar placeholder="Search for a club"></IonSearchbar>
                <IonList>
                    <IonItem>
                        <IonLabel>Colin's Club</IonLabel>
                        <IonIcon icon={arrowForwardCircleOutline}></IonIcon>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Sönke's Club</IonLabel>
                        <IonIcon icon={arrowForwardCircleOutline}></IonIcon>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Lana's Club</IonLabel>
                        <IonIcon icon={arrowForwardCircleOutline}></IonIcon>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Audrey's Club</IonLabel>
                        <IonIcon icon={arrowForwardCircleOutline}></IonIcon>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Nermin's Club</IonLabel>
                        <IonIcon icon={arrowForwardCircleOutline}></IonIcon>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Leander's Club</IonLabel>
                        <IonIcon icon={arrowForwardCircleOutline}></IonIcon>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Marina's Club</IonLabel>
                        <IonIcon icon={arrowForwardCircleOutline}></IonIcon>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default Club