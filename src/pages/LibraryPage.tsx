import {
    IonContent,
    IonHeader,
    IonPage,
    IonSearchbar,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import Card from "../components/Card";

const LibraryPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Library</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="ion-padding">
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size='large'>Library</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonSearchbar placeholder="Search for a title or author"></IonSearchbar>
                <Card title={"Clean Code"} subtitle={"Robert C. Martin"} img={"https://kbimages1-a.akamaihd.net/e0892dbb-7ba5-4820-b3a3-f7e15efbc814/1200/1200/False/clean-code.jpg"}></Card>
                <Card title={"Effective Java"} subtitle={"Joshua Bloch"} img={"https://rukminim1.flixcart.com/image/1408/1408/book/5/3/7/effective-java-original-imaep26yxhmwhsjv.jpeg?q=90"}></Card>
                <Card title={"Code Complete"} subtitle={"Steve McConnell"} img={"https://images.thenile.io/r1000/9780735619678.jpg"}></Card>
            </IonContent>
        </IonPage>
    )
}

export default LibraryPage