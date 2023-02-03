const number_list = [4, 12, 24, 56, 32, 155, 14, 18, 64, 12, 21, 02, 4, 90, 325, 7];

const reduce_result = [...number_list].reduce((acc, nb) => acc+=nb,0);

const recursive_result = (list) => (list.length === 0) ? 0 : list[0] + recursive_result(list.slice(1));

const recursivity_result = recursive_result([...number_list]);

console.log("ex01:", reduce_result, recursivity_result);

/***************************************************************** */

const unsorted_list = [10, 1, 4, 2, 5, 8, 6];

const swap = (list, a, b) => {
    let c = list[a];
    list[a] = list[b];
    list[b] = c;
};

const partionnement = (list, left, right) => {
    const pivot = list[Math.floor((right+left) / 2)];
    let i = left;
    let j = right;
    while(i <= j)
    {
        while(list[i] < pivot)
        {
            i++;
        }
        while(list[j] > pivot)
        {
            j--;
        }
        if(i <= j)
        {
            swap(list, i, j);
            i++;
            j--;
        }
    }
    return i;
}

const quick_sort = (list, left, right) => {
    if(list.length > 1)
    {
        let index = partionnement(list, left, right);
        if(left < index - 1) quick_sort(list, left, index - 1);
        if(index < right) quick_sort(list, index, right);
    }
    return list;
}

const sorted_list = quick_sort(unsorted_list, 0, unsorted_list.length - 1);

console.log("ex02:", sorted_list); 

/*************************************************** */

