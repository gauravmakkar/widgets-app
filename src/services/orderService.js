import {v4 as uuidv4} from 'uuid';
import {OrderStatus} from "../constants";

export const saveOrder = async (book) => {
    const savedOrder = {
        id: uuidv4(),
        book: book,
        status: OrderStatus.Complete

    }
    await localStorage.setItem(`order-${savedOrder.id}`, JSON.stringify(savedOrder))
    return savedOrder;
}

export const getOrder = async (orderId) => {
    const order = await localStorage.getItem(`order-${orderId}`)
    return JSON.parse(order);
}

