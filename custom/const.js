module.exports = {
	DEBUG : false,

	//FACEBOOK TOKEN
	FB_APP_SECRET : 'd19f9c4fcc41e68669db06ba51dd9e3a',
	FB_PAGE_VERIFY_TOKEN : 'baonganpham3011@@', // đặt 1 mã bất kỳ
	FB_PAGE_ACCESS_TOKEN : 'EAAdisjWZCiokBANGE0eaEHzApRUTqcoXfL5dmpRU5KZAj3Ie1PFrWKqyFgw3JZChk0DAy8m5983kH2SbmVATaMoXNJnXgmRsufxUKIIthiygvsM8nzLg4w3qVksTZCaI0xWZAkRckkmrNm4nzzPU0rLXD076P8NPmopwTopwnZCwZDZD',

	//HEROKU STUFFS
	APP_NAME : 'LTV-chatible',
	HEROKU_API_KEY : '9fa7cfb7-f500-4c4c-8977-cb651a4bb0d1',
	KEEP_APP_ALWAYS_ON : true, // đổi thành true nếu đã thêm credit card vào heroku

	//MONGODB SETUP
	DB_CONFIG_URI : 'const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://anhpronbk:<baonganpham3011@@>@anhpronbk-g6ex3.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
',

	//ANALYTICS
	HAS_POST_LOG : false,
	POST_LOG_ID : '',
	POST_LOG_ENTRY1 : '',
	POST_LOG_ENTRY2 : '',

	//GOOGLE FORMS
	REPORT_LINK : "https://goo.gl/forms/FlqtshjdI9bMesSN2",

	//OTHERS
	//(không bắt buộc) Cách bật tính năng hiện đã xem (seen): https://goo.gl/xjw9nP
	MAX_PEOPLE_WAITROOM : 7, //Số người tối đa trong phòng chờ
	MAX_WAIT_TIME_MINUTES : 60, //Số phút tối đa 1 người đc phép trong phòng chờ.
	                            //Đặt 0 để cho phép đợi bao lâu cũng đc

	//ADMIN UI
	ADMIN_PASSWORD : "" //password để login vào trang admin
};
