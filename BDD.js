class node {
    constructor(id, child0, child1, var_name) {
        this.id = id;
        this.child0 = child0;
        this.child1 = child1;
        this.var_name = var_name;
    }
    toString() {
        return `{id: ${this.id}, child0: ${this.child0}, child1: ${this.child1}, var_name: ${this.var_name}}`;
    }
}

let fresh_id = 1;
let nodes = [];

function make_node(child0, child1, var_name) {
    nodes.push(new node(fresh_id, child0, child1, var_name));
    fresh_id++;
    return fresh_id - 1;
}

let termimal0 = make_node(0, 0, "");
let terminal1 = make_node(0, 0, "");

function make_n_variable_template(n, func) {
    for (let i = 0; i < n; i++) {
        
    }
}

console.log(nodes.toString());
