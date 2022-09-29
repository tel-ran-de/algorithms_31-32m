import java.util.LinkedList;
import java.util.Stack;

public class Tree {

    private TreeNode root;

    public void insert(int value) {
        TreeNode temp = new TreeNode();
        temp.value = value;
        if (root == null) {
            // Дерево пока пустое и значит новый элемент temp
            // есть теперь root
            root = temp;
        } else {
            // В дереве уже существуют элементы и нужно найти
            // подходящее место для вставки нашего temp
            TreeNode p = root;
            while (true) {
                if (value < p.value) {
                    // Идем влево от p
                    if (p.leftChild != null) {
                        // Влево от p занято
                        p = p.leftChild;
                    } else {
                        // Влево от p свободно
                        p.leftChild = temp;
                        return;
                    }
                } else {
                    // Идем вправо от p
                    if (p.rightChild != null) {
                        // Вправо от p занято
                        p = p.rightChild;
                    } else {
                        // Вправо от p свободно
                        p.rightChild = temp;
                        return;
                    }
                }
            }
        }
    }

    public boolean search(int value) {
        TreeNode current = root;
        while (true) {
            if (current.value == value) {
                return true;
            }
            if (value < current.value) {
                // Необходимо идти влево
                if (current.leftChild != null) {
                    current = current.leftChild;
                } else {
                    return false;
                }
            } else {
                // Необходимо идти вправо
                if (current.rightChild != null) {
                    current = current.rightChild;
                } else {
                    return false;
                }
            }
        }
    }

    public TreeNode searchElement(int value) {
        TreeNode current = root;
        while (true) {
            if (current.value == value) {
                return current;
            }
            if (value < current.value) {
                // Необходимо идти влево
                if (current.leftChild != null) {
                    current = current.leftChild;
                } else {
                    return null;
                }
            } else {
                // Необходимо идти вправо
                if (current.rightChild != null) {
                    current = current.rightChild;
                } else {
                    return null;
                }
            }
        }
    }

    public void pass() {
        inorder(root);
    }

    private void inorder(TreeNode node) {
        if (node == null) {
            return;
        }
        inorder(node.leftChild);
        System.out.println(node.value);
        inorder(node.rightChild);
    }

    public void passIterative() {
        inorderIterative(root);
    }

    private void inorderIterative(TreeNode node) {
        Stack<TreeNode> st = new Stack<>();
        while (!st.empty() || node != null) {
            if (node != null) {
                st.push(node);
                node = node.leftChild;
            } else {
                node = st.pop();
                System.out.println(node.value);
                node = node.rightChild;
            }
        }
    }

    public void passWidth() {
        LinkedList<TreeNode> queue = new LinkedList<>(); // Очередь
        queue.add(root);
        while (!queue.isEmpty()) {
            TreeNode temp = queue.removeFirst();
            System.out.println(temp.value);
            if (temp.leftChild != null) {
                queue.addLast(temp.leftChild);
            }
            if (temp.rightChild != null) {
                queue.addLast(temp.rightChild);
            }
        }
    }

    private class TreeNode {
        int value;
        TreeNode leftChild;
        TreeNode rightChild;
    }

}
