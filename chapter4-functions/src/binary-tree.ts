type TreeNode = {
  value: string;
};

type LeafNode = TreeNode & {
  isLeaf: true;
};

type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode];
};

function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
  return {
    ...node,
    value: f(node.value),
  };
}

let a: TreeNode = { value: 'a' };
let b: LeafNode = { value: 'b', isLeaf: true };
let c: InnerNode = { value: 'c', children: [b] };

let a1 = mapNode(a, _ => _.toUpperCase());
let b1 = mapNode(b, _ => _.toUpperCase());
let c1 = mapNode(c, _ => _.toUpperCase());

// let n = 'text';
// let d1 = mapNode(n, _ => _.toUpperCase());

console.log('a1:', a1);
console.log('b1:', b1);
console.log('c1:', c1);
console.log('b1.isLeaf:', b1.isLeaf);
console.log('c1.children:', c1.children);
