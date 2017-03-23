var http = require('http')
var cheerio = require('cheerio')
var url = 'http://www.imooc.com/learn/348'

function filterChapters(html) {
	var $ = cheerio.load(html)
	var chapters = $("div.mod-chapters").find('.chapter')

	// [{
	// 	chapterTitle: '',
	// 	videos: [
	// 		title: '',
	// 		id: ''
	// 	]
	// }]
	var courseDate = []
	$('.chapter-info').remove()
$('.moco-btn').remove()
	chapters.each(function(item) {
		var chapter = $(this)
		var chapterTitle = chapter.find('strong').text()
		var videos = chapter.find('.video').children('li')
		var chapterDate = {
			chapterTitle: chapterTitle,
			videos: []
		}
		videos.each(function(item) {
			var video = $(this).find('.J-media-item')
			var videoTitle = video.text().replace(/\s+/g,' ');
			var id = video.attr('href').split('video/')[1]
			chapterDate.videos.push({
				title: videoTitle,
				id: id
			})
		})
		courseDate.push(chapterDate)
	})

	return courseDate
}

function printCourseDateInfo(courseDate) {
	courseDate.forEach(function(item) {
		var chapterTitle = item.chapterTitle

		console.log(chapterTitle + '\n')

		item.videos.forEach(function(video) {
			console.log('[' +video.id + ']' + video.title + '\n')
		})
	})
}

http.get(url, function(res) {
	var html = ''
	res.on('data', function(data) {
		html += data
	})

	res.on('end', function() {
		var courseDate = filterChapters(html)

		printCourseDateInfo(courseDate)
	})
}).on('error', function () {
	console.log('获取课程数据出错')
})