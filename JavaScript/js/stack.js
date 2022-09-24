class StackItem {
	value;
	next;
}

class Stack {
	#top = null;
			
	pop() {
		const a = this.top.value;
		this.top = this.top.next;
		return a;
	}
			
	push(item) {
		const temp = new StackItem();
		temp.value = item;
		temp.next = this.top;
		this.top = temp;
	}
			
	isEmpty() {
		return this.top == null;
	}
}