import {IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.css';
import Card from "../components/Card";

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>Your upcoming Discussions</IonItem>
                <Card title="Diva-e's Club" date="28.11.2022" time="14:00 - 16:00" subtitle="Clean Code"
                      location="Raum Gute Stube" chapter={2}/>
                <Card title="HTW FB4 Club" date="02.12.2022" time="17:00 - 19:00" subtitle="Effective Java"
                      location="WHC 356" chapter={5}/>
            </IonContent>
        </IonPage>
    );
};

export default Home
