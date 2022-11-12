import {
    IonAvatar, IonButton,
    IonContent,
    IonHeader, IonIcon, IonInput,
    IonItem,
    IonLabel, IonList, IonListHeader, IonNote,
    IonPage,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import './Profile.css';
import {arrowForwardCircleOutline} from "ionicons/icons";

const Profile: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Profile</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem lines="none" class="greeting">
                    <IonLabel>
                        <h1>Welcome</h1>
                        <h1>Sönke</h1>
                    </IonLabel>
                </IonItem>
                <IonItem lines="none" class="center">
                    <IonAvatar class="avatar">
                        <img alt="empty-avatar" src="https://ionicframework.com/docs/img/demos/avatar.svg"/>
                    </IonAvatar>
                </IonItem>
                <IonItem lines="none">
                    <IonButton class="center">Edit Profile</IonButton>
                </IonItem>
                <IonList>
                    <IonItem>
                        <IonLabel position="floating">Email</IonLabel>
                        <IonInput value="soenke.schaarschmidt@gmx.de"></IonInput>
                        <IonNote slot="helper">Enter a valid email address</IonNote>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Birthdate</IonLabel>
                        <IonInput value="24.01.2002"></IonInput>
                        <IonNote slot="helper">Enter your Birthdate</IonNote>
                    </IonItem>
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
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Profile
