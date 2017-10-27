export function add(item) {
    return {
        type: 'HUOYING_ADD',
        data:item,
    }
}

export function update(item) {
    return {
        type:'HUOYING_UPDATE',
        data:item
    }
}