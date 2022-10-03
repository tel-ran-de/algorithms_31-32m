function swap(arr, first, second) {
	let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

function partition(arr, begin, end) {
    let pivot = arr[end];
    let pivotIndex = begin;
    for (let i = begin; i < end; i++) {
		if (arr[i] < pivot) {
            swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr, pivotIndex, end);
    return pivotIndex;
}

function qsort(arr, begin, end) {
    if (begin < end) {
        let pivotIndex = partition(arr, begin, end);
        qsort(arr, begin, pivotIndex - 1);
        qsort(arr, pivotIndex + 1, end);
    }
}