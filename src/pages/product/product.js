let list = [
	{name: 'name1',price: '111',id:'id1',src: 'url.jpg',check: false},
	{name: 'name2',price: '111',id:'id1',src: 'url.jpg',check: false},
	{name: 'name3',price: '111',id:'id1',src: 'url.jpg',check: false},
	{name: 'name4',price: '111',id:'id1',src: 'url.jpg',check: false},
];
export default{
  name: 'product',
  data: function () {
  	return {
  		list,
  		allCheck: false,
  	}
  },
  methods: {
  	deleteItem: function (i){
  		let vm = this;
  		vm.list.splice(i,1);
  	},
  	deleteCheck: function(){
  		let vm = this;
  		let ids = [];
  		for (let i = 0,l = vm.list.length; i < l; i++) {
  			if (vm.list[i].check) {
	  			ids.push(vm.list[i].id);
	  			vm.list.splice(i,1);
	  			i--
	  			l--
  			}
  		}
  		if (!ids.length) {
  			return	alert('请选择至少一个商品');
  		}
  		vm.allCheck = false;

  	},
  	checkAll: function(){
  		let vm = this;
  		vm.list.forEach(function(el, i) {
  			el.check = vm.allCheck;
  		});
  	},
  	checkItem: function(item){
  		let vm = this;
  		let isCheck = true;
  		if (!item.check) {
  			isCheck = false;
  		}else{
	  		vm.list.forEach(function(el, i) {
	  			if (!el.check) {
	  				return isCheck = false;
	  			}
	  		});
  		}
  		vm.allCheck = isCheck;
  	}
  }
}
