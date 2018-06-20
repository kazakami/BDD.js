class node {
    constructor(id, child0, child1, var_name) {
        this.id = id;
        this.child0 = child0;
        this.child1 = child1;
        this.var_name = var_name;
    }
    toString() {
        return `{id: ${this.id}, child0: ${this.child0}, child1: ${this.child1}, var_name: "${this.var_name}"}`;
    }
}

let fresh_id = 1;
let nodes = [];

function make_node(child0, child1, var_name) {
    nodes.push(new node(fresh_id, child0, child1, var_name));
    fresh_id++;
    return fresh_id - 1;
}

let terminal0 = make_node(0, 0, "terminal0");
let terminal1 = make_node(0, 0, "terminal1");


//0ならterminal0、1ならterminal1を返す
function terminal(n) {
    if (n === 0)
        return terminal0;
    if (n === 1)
        return terminal1;
    console.log("input must be 0 or 1");
}

//2分グラフを生成
function make_n_variable_template(n, func) {
    //親を持たないノードのidのリスト
    node_ids = [];
    //終端ノードを子に持つノードの生成
    for (let i = 0; i < Math.pow(2, n-1); i++) {
        let child0 = terminal(func(num_to_bin_arr(n-1, i).concat([0])));
        let child1 = terminal(func(num_to_bin_arr(n-1, i).concat([1])));
        node_ids.unshift(make_node(child0, child1, "" + n));
    }
    //非終端ノードを子に持つノードの生成
    for (let i = n - 2; i >= 0; i--) {
        tmp = [];
        for (let j = 0; j < Math.pow(2, i); j++) {
            tmp.unshift(make_node(node_ids.pop(), node_ids.pop(), "" + (i + 1)));
        }
        node_ids = tmp;
    }
}

//数値をd桁2進表記に変換し、[0,1]の配列に変換する
function num_to_bin_arr(d, n) {
    //2進表記の文字列に変換
    let bin = n.toString(2);
    let arr = [];
    for (let c of bin) {
        if (c === "0")
            arr.push(0);
        if (c === "1")
            arr.push(1);
    }
    let l = arr.length;
    for (let i = 0; i < d - l; i++) {
        arr.unshift(0);
    }
    return arr;
}

make_n_variable_template(3, function(arr){return arr[0] & arr[1] | arr[2]});


console.log(nodes.toString());


//console.log(function(arr){return arr[0] & arr[1]}(num_to_bin_arr(10)));
