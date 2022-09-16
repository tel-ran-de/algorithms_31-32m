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
}