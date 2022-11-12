import {
    IonRouterOutlet,
    IonTabBar,
    IonTabs,
    IonTabButton,
    IonIcon,
    IonLabel,
} from "@ionic/react";
import Profile from "./Profile";
import {Redirect, Route} from "react-router-dom";
import Home from "./Home";
import {book, home, library, person} from "ionicons/icons";
import LibraryPage from "./LibraryPage";
import Club from "./Club";

const Tabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path='/home' component={Home}/>
                <Route path='/library' component={LibraryPage}/>
                <Route path='/clubs' component={Club}/>
                <Route path='/profile' component={Profile}/>
                <Route exact path='/'>
                    <Redirect to='/home'/>
                </Route>
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href='/home'>
                    <IonIcon icon={home}/>
                    <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab="library" href='/library'>
                    <IonIcon icon={library}/>
                    <IonLabel>Library</IonLabel>
                </IonTabButton>
                <IonTabButton tab="clubs" href='/clubs'>
                    <IonIcon icon={book}/>
                    <IonLabel>Clubs</IonLabel>
                </IonTabButton>
                <IonTabButton tab="profile" href='/profile'>
                    <IonIcon icon={person}/>
                    <IonLabel>Profile</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    );
}

export default Tabs;