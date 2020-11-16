export function detectOrientation() {
    let orientation = window.screen.orientation;
    console.log(orientation);

    if (orientation.type === "portrait-primary") {
        return "portrait"
    } else return "landscape"
    // if (orientation === "landscape-primary") {
    //   console.log("That looks good.");
    // } else if (orientation === "landscape-secondary") {
    //   console.log("Mmmh... the screen is upside down!");
    // } else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
    //   console.log("Mmmh... you should rotate your device to landscape");
    // } 
}