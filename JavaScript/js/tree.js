class TreeNode {
	value;
	leftChild;
	rightChild;
}

class Tree {
	#root = null;
	
	insert(value) {
		const temp = new TreeNode();
		temp.value = value;
		if (this.root == null) {
			// Дерево пока пустое и значит новый элемент temp
            // есть теперь root
			this.root = temp;
		} else {
			// В дереве уже существуют элементы и нужно найти
            // подходящее место для вставки нашего temp
			let p = this.root;
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
	
	searchValue(value) {
		let current = this.root;
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
	
	searchTreeNode(value) {
		let current = this.root;
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
	
	inorder(node) {
		if (node == null) {
            return;
        }
        this.inorder(node.leftChild);
		document.write(node.value + '<br>');
        this.inorder(node.rightChild);
	}
	
	pass() {
        this.inorder(this.root);
    }
	
	inorderIterative(node) {
        const st = new Stack();
        while (!st.isEmpty() || node != null) {
            if (node != null) {
                st.push(node);
                node = node.leftChild;
            } else {
                node = st.pop();
				document.write(node.value + '<br>');
                node = node.rightChild;
            }
        }
    }
	
	passIterative() {
        this.inorderIterative(this.root);
    }
	
}