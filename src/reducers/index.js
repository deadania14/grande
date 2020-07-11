const initState ={
    posts: [
        {
            id: 1,
            title: "Kopi Susu",
            body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            id: 2,
            title: "Americano",
            body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            id: 3,
            title: "Jasmine Tea",
            body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
        }
    ],
    messages: [
        {
            id: 1,
            name : "Ayudia",
            email : "ayudiaPermadi@gmail.com",
            message : "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
        }
    ]
}

const reducer = ( state = initState, action)=> {
    if (action.type ==='ADD_MESSAGE'){
        return{
            ...state,
            messages: [...state.messages, action.message]
        }
    }
    return state;
}

export default reducer;