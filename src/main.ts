/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');

    WA.room.area.onEnter("zoneSerre").subscribe(() => {
        hideRoofSerre();
    });
    WA.room.area.onLeave("zoneSerre").subscribe(() => {
        showRoofSerre();
    });
    WA.room.area.onEnter("zoneTente").subscribe(() => {
        hideRoofTente();
    });
    WA.room.area.onLeave("zoneTente").subscribe(() => {
        showRoofTente();
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

const hideRoofSerre = () => {
    WA.room.hideLayer("Roofs/RoofSerre1");
    WA.room.hideLayer("Roofs/RoofSerre2");
}
const showRoofSerre = () => {
    WA.room.showLayer("Roofs/RoofSerre1");
    WA.room.showLayer("Roofs/RoofSerre2");
}

const hideRoofTente = () => {
    WA.room.hideLayer("BaseRoofs/RoofTente1");
    WA.room.hideLayer("Roofs/RoofTente2");
}
const showRoofTente = () => {
    WA.room.showLayer("BaseRoofs/RoofTente1");
    WA.room.showLayer("Roofs/RoofTente2");
}
export {};
