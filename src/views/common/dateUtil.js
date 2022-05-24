// 일 계산
export const getSecondToDay = (sec) =>{
    return Math.floor(sec / 86400).toString()
}

// 시간,분, 초 계산
export const getSecondToTime = (sec) => {
    const hours = Math.floor(sec > 86400 ? sec % 86400 / 3600 : sec / 3600)
    const minute = Math.floor(sec % 3600 / 60)
    const second = sec % 60

    const hourStr = hours < 10 ? '0'+ hours : hours.toString()
    const minuteStr = minute < 10 ? '0' + minute : minute.toString()
    const secondStr = second < 10 ? '0'+ second : second.toString()

    return hourStr + ':' + minuteStr + ':' + secondStr
}