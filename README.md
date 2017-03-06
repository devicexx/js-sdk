# JS SDK

Device++物联云

## 使用说明

### 使用示例

```html
<html>
	<head>
		<title>JS SDK使用示例 - Device++物联云</title>
	</head>
	<body>
		<script src="./dist/devicexx.js"></script>
		<script>
			var devicexx = new DeviceXX('ws://test.devicexx.com:8083').connect();
			devicexx.subscribe('demo/topic');

			devicexx.on('message', function(topic, payload) {
				// do something

				devicexx.end();
			});

			devicexx.publish('demo/topic', 'hello devicexx!');
		</script>
	</body>
</html>
```

## Copyright

&copy; 2016-2017 万加物联（深圳）科技有限公司
