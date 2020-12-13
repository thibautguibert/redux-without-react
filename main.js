// ACTIONS
const addAction = {
    type: "ADD",
};

const add10Action = {
    type: "ADD 10"
};

const removeAction = {
    type: "REMOVE",
};

const remove10Action = {
    type: "REMOVE 10"
}

// REDUCER
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADD":
            return state + 1;
        case "ADD 10":
            return state + 10;
        case "REMOVE":
            return state - 1;
        case "REMOVE 10":
            return state - 10;
        default:
            return state;
    }
}

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

// MAIN
const renderStore = document.getElementById('render-store');
const render = () => {
    renderStore.innerHTML = store.getState();
}

store.subscribe(render);
render();

const add = document.getElementById("add");
add.addEventListener("click", () => {
    store.dispatch(addAction)
});

const remove = document.getElementById('remove');
remove.addEventListener("click", () => {
    store.dispatch(removeAction)
})

const add10 = document.getElementById("add10");
add10.addEventListener("click", () => {
    store.dispatch(add10Action)
})

const remove10 = document.getElementById("remove10");
remove10.addEventListener("click", () => {
    store.dispatch(remove10Action)
})

// REDUCER TESTS
expect(counterReducer(5, { type: "ADD" })).toEqual(6);
expect(counterReducer(5, { type: "REMOVE" })).toEqual(4);
expect(counterReducer(5, { type: "UNKNOWN" })).toEqual(5);

