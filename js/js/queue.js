class QueueItem {
	value;
	next;
}

class Queue {
	#head = null;
	#tail = null;
			
	add(item) {
		const temp = new QueueItem();
		temp.value = item;
		if (this.head == null) {
			this.head = this.tail = temp;
		} else {
			this.tail.next = temp;
			this.tail = temp;
		}
	}
			
	remove() {
		let value = this.head.value;
		if (this.head == this.tail) {
			this.head = this.tail = null;
		} else {
			this.head = this.head.next;
		}
		return value;
	}
			
	isEmpty() {
		return this.head == null;
	}
}