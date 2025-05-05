let memSize1 = 0
let zLayerBlur1 = 1
let blurSize1 = 1
let variable1 = scene.createRenderable(zLayerBlur1, (image1: Image, camera: scene.Camera) => {
    let screenClone = image1.clone()
    if (blurSize1 != 1) {
        let tempImg = image.create(Math.ceil(screen.screenWidth() / blurSize1), Math.ceil(screen.screenHeight() / blurSize1))
        helpers.imageBlit(tempImg, 0, 0, Math.ceil(screen.screenWidth() / blurSize1), Math.ceil(screen.screenHeight() / blurSize1), screenClone, 0, 0, screen.screenWidth(), screen.screenHeight(), true, false)
        helpers.imageBlit(image1, (tempImg.width * blurSize1 - screen.screenWidth()) / -2, (tempImg.height * blurSize1 - screen.screenHeight()) / -2, tempImg.width * blurSize1, tempImg.height * blurSize1, tempImg, 0, 0, tempImg.width, tempImg.height, true, false)
    }
})
//% color="#83de8a"
//% block="Blur"
namespace blur {
    //% block="blur screen image to pixel size $size || over $ms ms"
    //% weight=0
    //% ms.shadow="timePicker"
    //% expandableArgumentMode="toggle"
    export function SetBlurFilter(size: number, ms = 25) {
        size = Math.max(1, size)
        if (ms < 25) {
            ms = 25
        }
        memSize1 = Math.floor(size - blurSize1) / (ms / 25)
        for (let j = 0; j < (ms / 25); j++) {
            blurSize1 += memSize1
            pause(25)
        }
    }
    //% block="blur in over $ms ms"
    //% weight=2
    //% ms.shadow="timePicker"
    export function BlurIn(ms = 25) {
        blurSize1 = 15
        let size = 1
        if (ms < 25) {
            ms = 25
        }
        memSize1 = (size - blurSize1) / (ms / 25)
        for (let j = 0; j < Math.floor(ms / 25); j++) {
            blurSize1 += memSize1
            pause(25)
        }
    }

    //% block="blur out over $ms ms"
    //% weight=1
    //% ms.shadow="timePicker"
    export function BlurOut(ms = 25) {
        blurSize1 = 1
        let size = 15
        if (ms < 25) {
            ms = 25
        }
        memSize1 = (size - blurSize1) / (ms / 25)
        for (let j = 0; j < Math.floor(ms / 25); j++) {
            blurSize1 += memSize1
            pause(25)
        }
    }

}
