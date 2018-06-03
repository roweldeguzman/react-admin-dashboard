export default function(state = {}, action) {
	switch(action.type) {
		case "update": 
			return {
				bar1: [
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random())
				],
				bar2: [
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random())
				],
				bar3: [
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random())
				],
				bar4: [
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random())
				],
				pie1: [
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random())
				],
				pie2: [
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random()),
					Math.floor(100 * Math.random())
				]
			}
		default: 
			return {
				bar1: [6, 4, 8, 6, 5, 6, 7, 8, 3, 5, 9, 5, 8, 4, 3, 6, 8],
				bar2: [4, 7, 6, 2, 5, 3, 8, 6, 6, 4, 8, 6, 5, 8, 2, 4, 6],
				bar3: [9, 4, 6, 5, 6, 4, 5, 7, 9, 3, 6, 5],
				bar4: [5, 6, 3, 9, 7, 5, 4, 6, 5, 6, 4, 9],
				pie1: [25, 30, 30, 15],
				pie2: [20, 35, 30, 5]
			}
	}
}