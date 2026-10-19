const Version = '1';
let fug, ful = null, fun = false;
let fur = ['*tapecontent.net', '*cloudatacdn.com', '*loadshare.org', '*cdn-centaurus.com', 'scholar.google.com'];
const fws = 'https://edt-pages.github.io', cid = Number(String(Version).replace(/\D+/g, ''));
const face = 8 * 1024, fact = Math.ceil(face * 4 / 3) + 4;
const fade = 20 * 1024, fado = 16 * 1024 * 1024, fahd = 4096;
const fail = 32 * 1024, fain = 512, fair = Math.max(4096, fain * 12), fake = 4;
let fall = 2, fame = 1, fang = false;
const fas = [
	(Proxy.name + "IP").toUpperCase(),
	(String.fromCharCode(67, 109) + URL.name[2] + 'i' + URL.name[0]).toLowerCase(),
	String(2407 * 300 - 10).split('').reverse().join('')
];
const cia = 'v2rayN/edge' + 'tunnel (https://github.com/' + fas[1] + '/edge' + 'tunnel)';
export default {
	async fetch(request, env, ctx) {
		let 请求URL文本 = request.url.replace(/%5[Cc]/g, '').replace(/\\/g, '');
		const 请求URL锚点索引 = 请求URL文本.indexOf('#');
		const 请求URL主体部分 = 请求URL锚点索引 === -1 ? 请求URL文本 : 请求URL文本.slice(0, 请求URL锚点索引);
		if (!请求URL主体部分.includes('?') && /%3f/i.test(请求URL主体部分)) {
			const 请求URL锚点部分 = 请求URL锚点索引 === -1 ? '' : 请求URL文本.slice(请求URL锚点索引);
			请求URL文本 = 请求URL主体部分.replace(/%3f/i, '?') + 请求URL锚点部分;
		}
		const url = new URL(请求URL文本);
		const UA = request.headers.get('User-Agent') || 'null';
		const upgradeHeader = (request.headers.get('Upgrade') || '').toLowerCase(), contentType = (request.headers.get('content-type') || '').toLowerCase();
		const 管理员密码 = env.ADMIN || env.admin || env.PASSWORD || env.password || env.pswd || env.TOKEN || env.KEY || env.UUID || env.uuid;
		const 加密秘钥 = env.KEY || '勿动此默认密钥，有需求请自行通过添加变量KEY进行修改';
		const userIDMD5 = await flay(管理员密码 + 加密秘钥);
		const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-4[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
		const envUUID = env.UUID || env.uuid;
		const userID = (envUUID && uuidRegex.test(envUUID)) ? envUUID.toLowerCase() : [userIDMD5.slice(0, 8), userIDMD5.slice(8, 12), '4' + userIDMD5.slice(13, 16), '8' + userIDMD5.slice(17, 20), userIDMD5.slice(20)].join('-');
		const hosts = env.HOST ? (await ala(env.HOST)).map(h => h.toLowerCase().replace(/^https?:\/\//, '').split('/')[0].split(':')[0]) : [url.hostname];
		const host = hosts[0];
		const 访问路径 = url.pathname.slice(1).toLowerCase();
		fun = ['1', 'true'].includes(env.DEBUG) || fun;
		fang = ['1', 'true'].includes(env.PRELOAD_RACE_DIAL) || fang;
		fame = Math.max(1, Number(env.PROXY_CONCURRENT_DIAL) || fame);
		fall = Math.max(1, Number(env.TCP_CONCURRENT_DIAL) || fall);
		if (!env.TCP_CONCURRENT_DIAL && fall !== 1 && faa(request) === 'cmcc') fall = 1;
		let 默认反代IP = (`${request.cf.colo}.${fas[0]}.${fas[1]}SsSs.nEt`).toLowerCase(), 默认反代兜底 = true;
		if (env.PROXYIP) {
			const proxyIPs = await ala(env.PROXYIP);
			默认反代IP = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
			默认反代兜底 = false;
		};
		const 访问IP = request.headers.get('CF-Connecting-IP') || request.headers.get('True-Client-IP') || request.headers.get('X-Real-IP') || request.headers.get('X-Forwarded-For') || request.headers.get('Fly-Client-IP') || request.headers.get('X-Appengine-Remote-Addr') || request.headers.get('X-Cluster-Client-IP') || '未知IP';
		const [本机标识头, 本机标识键] = 获取本机标识(userID);
		if (ful === null) {
			if (env.GO2SOCKS5) fur = [...new Set(fur.concat(await ala(env.GO2SOCKS5)))];
			ful = fur;
		} else fur = ful;
		if (访问路径 === 'version') {// 版本信息接口
			const 请求UUID = (url.searchParams.get('uuid') || '').toLowerCase();
			if (uuidRegex.test(请求UUID)) {
				const 目标UUID = String(userID).toLowerCase();
				let 请求前8总和 = 0, 目标前8总和 = 0;
				for (let i = 0; i < 8; i++) {
					const 请求码 = 请求UUID.charCodeAt(i);
					请求前8总和 += 请求码 <= 57 ? 请求码 - 48 : 请求码 - 87;
					const 目标码 = 目标UUID.charCodeAt(i);
					目标前8总和 += 目标码 <= 57 ? 目标码 - 48 : 目标码 - 87;
				}
				if (请求前8总和 === 目标前8总和 && 请求UUID.slice(-12) === 目标UUID.slice(-12)) return new Response(JSON.stringify({ Version: cid }), { status: 200, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
			}
		} else if (管理员密码 && upgradeHeader === 'websocket') {// WebSocket代理
			const 反代上下文 = await axe(url, userID, 默认反代IP, 默认反代兜底);
			log(`[WebSocket] 命中请求: ${url.pathname}${url.search}`);
			return await 处理WS请求(request, userID, url, 反代上下文);
		} else if (管理员密码 && !访问路径.startsWith('admin/') && 访问路径 !== 'login' && request.method === 'POST') {// gRPC/叉HTTP代理
			const 反代上下文 = await axe(url, userID, 默认反代IP, 默认反代兜底);
			const 命中叉HTTP特征 = !!request.headers.get(本机标识头) || !!url.searchParams.get(本机标识键);
			if (!命中叉HTTP特征 && contentType.startsWith('application/grpc')) {
				log(`[gRPC] 命中请求: ${url.pathname}${url.search}`);
				return await 处理gRPC请求(request, userID, 反代上下文);
			}
			log(`[叉HTTP] 命中请求: ${url.pathname}${url.search}`);
			return await 处理叉HTTP请求(request, userID, 反代上下文);
		} else {
			if (url.protocol === 'http:') return Response.redirect(url.href.replace(`http://${url.hostname}`, `https://${url.hostname}`), 301);
			if (!管理员密码) return fetch(fws + '/noADMIN').then(r => { const headers = new Headers(r.headers); headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate'); headers.set('Pragma', 'no-cache'); headers.set('Expires', '0'); return new Response(r.body, { status: 404, statusText: r.statusText, headers }) });
			if (env.KV && typeof env.KV.get === 'function') {
				const 区分大小写访问路径 = url.pathname.slice(1);
				if (区分大小写访问路径 === 加密秘钥 && 加密秘钥 !== '勿动此默认密钥，有需求请自行通过添加变量KEY进行修改') {//快速订阅
					const params = new URLSearchParams(url.search);
					params.set('token', await flay(host + userID));
					return new Response('重定向中...', { status: 302, headers: { 'Location': `/sub?${params.toString()}` } });
				} else if (访问路径 === 'login') {//处理登录页面和登录请求
					const cookies = request.headers.get('Cookie') || '';
					const authCookie = cookies.split(';').find(c => c.trim().startsWith('auth='))?.split('=')[1];
					if (authCookie == await flay(UA + 加密秘钥 + 管理员密码)) return new Response('重定向中...', { status: 302, headers: { 'Location': '/admin' } });
					if (request.method === 'POST') {
						const formData = await request.text();
						const params = new URLSearchParams(formData);
						const 输入密码 = params.get('password');
						if (输入密码 === (typeof 管理员密码 === 'string' ? 管理员密码.replace(/[\r\n]/g, '') : 管理员密码)) {
							// 密码正确，设置cookie并返回成功标记
							const 响应 = new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
							响应.headers.set('Set-Cookie', `auth=${await flay(UA + 加密秘钥 + 管理员密码)}; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax`);
							return 响应;
						}
					}
					return fetch(fws + '/login');
				} else if (访问路径 === 'admin' || 访问路径.startsWith('admin/')) {//验证cookie后响应管理页面
					const cookies = request.headers.get('Cookie') || '';
					const authCookie = cookies.split(';').find(c => c.trim().startsWith('auth='))?.split('=')[1];
					// 没有cookie或cookie错误，跳转到/login页面
					if (!authCookie || authCookie !== await flay(UA + 加密秘钥 + 管理员密码)) return new Response('重定向中...', { status: 302, headers: { 'Location': '/login' } });
					if (访问路径 === 'admin/log.json') {// 读取日志内容
						const 读取日志内容 = await env.KV.get('log.json') || '[]';
						return new Response(读取日志内容, { status: 200, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
					} else if (区分大小写访问路径 === 'admin/getCloudflareUsage') {// 查询请求量
						try {
							const Usage_JSON = await ana(url.searchParams.get('Email'), url.searchParams.get('GlobalAPIKey'), url.searchParams.get('AccountID'), url.searchParams.get('APIToken'));
							return new Response(JSON.stringify(Usage_JSON, null, 2), { status: 200, headers: { 'Content-Type': 'application/json' } });
						} catch (err) {
							const errorResponse = { msg: '查询请求量失败，失败原因：' + err.message, error: err.message };
							return new Response(JSON.stringify(errorResponse, null, 2), { status: 500, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
						}
					} else if (区分大小写访问路径 === 'admin/getADDAPI') {// 验证优选API
						if (url.searchParams.get('url')) {
							const 待验证优选URL = url.searchParams.get('url');
							try {
								new URL(待验证优选URL);
								const 请求优选API内容 = await co([待验证优选URL], url.searchParams.get('port') || '443', 本机标识头);
								let 优选API的IP = 请求优选API内容[0].length > 0 ? 请求优选API内容[0] : 请求优选API内容[1];
								优选API的IP = 优选API的IP.map(item => item.replace(/#(.+)$/, (_, remark) => '#' + decodeURIComponent(remark)));
								return new Response(JSON.stringify({ success: true, data: 优选API的IP }, null, 2), { status: 200, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
							} catch (err) {
								const errorResponse = { msg: '验证优选API失败，失败原因：' + err.message, error: err.message };
								return new Response(JSON.stringify(errorResponse, null, 2), { status: 500, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
							}
						}
						return new Response(JSON.stringify({ success: false, data: [] }, null, 2), { status: 403, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
					} else if (访问路径 === 'admin/check') {// 代理检查
						const 代理协议 = ['socks5', 'http', 'https', 'turn', 'sstp'].find(类型 => url.searchParams.has(类型)) || null;
						if (!代理协议) return new Response(JSON.stringify({ error: '缺少代理参数' }), { status: 400, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
						const 代理参数 = url.searchParams.get(代理协议);
						const startTime = Date.now();
						let 检测代理响应;
						try {
							const checkParsed = await arp(代理参数, awe(代理协议));
							const { username, password, hostname, port } = checkParsed;
							const 完整代理参数 = username && password ? `${username}:${password}@${hostname}:${port}` : `${hostname}:${port}`;
							try {
								const 检测主机 = 'cloudflare.com', 检测端口 = 443, encoder = new TextEncoder(), decoder = new TextDecoder();
								const TCP连接 = iw(request);
								let tcpSocket = null, tlsSocket = null;
								try {
									tcpSocket = 代理协议 === 'socks5'
										? await socks5Connect(检测主机, 检测端口, new Uint8Array(0), TCP连接, checkParsed)
										: 代理协议 === 'turn'
											? await turnConnect(checkParsed, 检测主机, 检测端口, TCP连接)
											: 代理协议 === 'sstp'
												? await sstpConnect(checkParsed, 检测主机, 检测端口, TCP连接)
												: (代理协议 === 'https' && hay(hostname)
													? await httpsConnect(检测主机, 检测端口, new Uint8Array(0), TCP连接, checkParsed)
													: await httpConnect(检测主机, 检测端口, new Uint8Array(0), 代理协议 === 'https', TCP连接, checkParsed));
									if (!tcpSocket) throw new Error('无法连接到代理服务器');
									tlsSocket = new TlsClient(tcpSocket, { serverName: 检测主机, insecure: true });
									await tlsSocket.handshake();
									await tlsSocket.write(encoder.encode(`GET /cdn-cgi/trace HTTP/1.1\r\nHost: ${检测主机}\r\nUser-Agent: Mozilla/5.0\r\nConnection: close\r\n\r\n`));
									let responseBuffer = new Uint8Array(0), headerEndIndex = -1, contentLength = null, chunked = false;
									const 最大响应字节 = 64 * 1024;
									while (responseBuffer.length < 最大响应字节) {
										const value = await tlsSocket.read();
										if (!value) break;
										if (value.byteLength === 0) continue;
										responseBuffer = hot(responseBuffer, value);
										if (headerEndIndex === -1) {
											const crlfcrlf = responseBuffer.findIndex((_, i) => i < responseBuffer.length - 3 && responseBuffer[i] === 0x0d && responseBuffer[i + 1] === 0x0a && responseBuffer[i + 2] === 0x0d && responseBuffer[i + 3] === 0x0a);
											if (crlfcrlf !== -1) {
												headerEndIndex = crlfcrlf + 4;
												const headers = decoder.decode(responseBuffer.slice(0, headerEndIndex));
												const statusLine = headers.split('\r\n')[0] || '';
												const statusMatch = statusLine.match(/HTTP\/\d\.\d\s+(\d+)/);
												const statusCode = statusMatch ? parseInt(statusMatch[1], 10) : NaN;
												if (!Number.isFinite(statusCode) || statusCode < 200 || statusCode >= 300) throw new Error(`代理检测请求失败: ${statusLine || '无效响应'}`);
												const lengthMatch = headers.match(/\r\nContent-Length:\s*(\d+)/i);
												if (lengthMatch) contentLength = parseInt(lengthMatch[1], 10);
												chunked = /\r\nTransfer-Encoding:\s*chunked/i.test(headers);
											}
										}
										if (headerEndIndex !== -1 && contentLength !== null && responseBuffer.length >= headerEndIndex + contentLength) break;
										if (headerEndIndex !== -1 && chunked && decoder.decode(responseBuffer).includes('\r\n0\r\n\r\n')) break;
									}
									if (headerEndIndex === -1) throw new Error('代理检测响应头过长或无效');
									const response = decoder.decode(responseBuffer);
									const ip = response.match(/(?:^|\n)ip=(.*)/)?.[1];
									const loc = response.match(/(?:^|\n)loc=(.*)/)?.[1];
									if (!ip || !loc) throw new Error('代理检测响应无效');
									检测代理响应 = { success: true, proxy: 代理协议 + "://" + 完整代理参数, ip, loc, responseTime: Date.now() - startTime };
								} finally {
									try { tlsSocket ? tlsSocket.close() : await tcpSocket?.close?.() } catch (e) { }
								}
							} catch (error) {
								检测代理响应 = { success: false, error: error.message, proxy: 代理协议 + "://" + 完整代理参数, responseTime: Date.now() - startTime };
							}
						} catch (err) {
							检测代理响应 = { success: false, error: err.message, proxy: 代理协议 + "://" + 代理参数, responseTime: Date.now() - startTime };
						}
						return new Response(JSON.stringify(检测代理响应, null, 2), { status: 200, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
					}

					fug = await fir(env, host, userID, UA);

					if (访问路径 === 'admin/init') {// 重置配置为默认值
						try {
							fug = await fir(env, host, userID, UA, true);
							ctx.waitUntil(fohn(env, request, 访问IP, 'Init_Config', fug));
							fug.init = '配置已重置为默认值';
							return new Response(JSON.stringify(fug, null, 2), { status: 200, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
						} catch (err) {
							const errorResponse = { msg: '配置重置失败，失败原因：' + err.message, error: err.message };
							return new Response(JSON.stringify(errorResponse, null, 2), { status: 500, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
						}
					} else if (request.method === 'POST') {// 处理 KV 操作（POST 请求）
						if (访问路径 === 'admin/config.json') { // 保存config.json配置
							try {
								const newConfig = await request.json();
								// 验证配置完整性
								if (!newConfig.UUID || !newConfig.HOST) return new Response(JSON.stringify({ error: '配置不完整' }), { status: 400, headers: { 'Content-Type': 'application/json;charset=utf-8' } });

								// 保存到 KV
								await env.KV.put('config.json', JSON.stringify(newConfig, null, 2));
								ctx.waitUntil(fohn(env, request, 访问IP, 'Save_Config', fug));
								return new Response(JSON.stringify({ success: true, message: '配置已保存' }), { status: 200, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
							} catch (error) {
								console.error('保存配置失败:', error);
								return new Response(JSON.stringify({ error: '保存配置失败: ' + error.message }), { status: 500, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
							}
						} else if (访问路径 === 'admin/cf.json') { // 保存cf.json配置
							try {
								const newConfig = await request.json();
								const CF_JSON = { Email: null, GlobalAPIKey: null, AccountID: null, APIToken: null, UsageAPI: null };
								if (!newConfig.init || newConfig.init !== true) {
									if (newConfig.Email && newConfig.GlobalAPIKey) {
										CF_JSON.Email = newConfig.Email;
										CF_JSON.GlobalAPIKey = newConfig.GlobalAPIKey;
									} else if (newConfig.AccountID && newConfig.APIToken) {
										CF_JSON.AccountID = newConfig.AccountID;
										CF_JSON.APIToken = newConfig.APIToken;
									} else if (newConfig.UsageAPI) {
										CF_JSON.UsageAPI = newConfig.UsageAPI;
									} else {
										return new Response(JSON.stringify({ error: '配置不完整' }), { status: 400, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
									}
								}

								// 保存到 KV
								await env.KV.put('cf.json', JSON.stringify(CF_JSON, null, 2));
								ctx.waitUntil(fohn(env, request, 访问IP, 'Save_Config', fug));
								return new Response(JSON.stringify({ success: true, message: '配置已保存' }), { status: 200, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
							} catch (error) {
								console.error('保存配置失败:', error);
								return new Response(JSON.stringify({ error: '保存配置失败: ' + error.message }), { status: 500, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
							}
						} else if (访问路径 === 'admin/tg.json') { // 保存tg.json配置
							try {
								const newConfig = await request.json();
								if (newConfig.init && newConfig.init === true) {
									const TG_JSON = { BotToken: null, ChatID: null };
									await env.KV.put('tg.json', JSON.stringify(TG_JSON, null, 2));
								} else {
									if (!newConfig.BotToken || !newConfig.ChatID) return new Response(JSON.stringify({ error: '配置不完整' }), { status: 400, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
									await env.KV.put('tg.json', JSON.stringify(newConfig, null, 2));
								}
								ctx.waitUntil(fohn(env, request, 访问IP, 'Save_Config', fug));
								return new Response(JSON.stringify({ success: true, message: '配置已保存' }), { status: 200, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
							} catch (error) {
								console.error('保存配置失败:', error);
								return new Response(JSON.stringify({ error: '保存配置失败: ' + error.message }), { status: 500, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
							}
						} else if (区分大小写访问路径 === 'admin/ADD.txt') { // 保存自定义优选IP
							try {
								const customIPs = await request.text();
								await env.KV.put('ADD.txt', customIPs);// 保存到 KV
								ctx.waitUntil(fohn(env, request, 访问IP, 'Save_Custom_IPs', fug));
								return new Response(JSON.stringify({ success: true, message: '自定义IP已保存' }), { status: 200, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
							} catch (error) {
								console.error('保存自定义IP失败:', error);
								return new Response(JSON.stringify({ error: '保存自定义IP失败: ' + error.message }), { status: 500, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
							}
						} else return new Response(JSON.stringify({ error: '不支持的POST请求路径' }), { status: 404, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
					} else if (访问路径 === 'admin/config.json') {// 处理 admin/config.json 请求，返回JSON
						return new Response(JSON.stringify(fug, null, 2), { status: 200, headers: { 'Content-Type': 'application/json' } });
					} else if (区分大小写访问路径 === 'admin/ADD.txt') {// 处理 admin/ADD.txt 请求，返回本地优选IP
						let 本地优选IP = await env.KV.get('ADD.txt') || 'null';
						if (本地优选IP == 'null') 本地优选IP = (await fa(request, fug.fray.本地IP库.随机数量, fug.fray.本地IP库.指定端口))[1];
						return new Response(本地优选IP, { status: 200, headers: { 'Content-Type': 'text/plain;charset=utf-8', 'asn': request.cf.asn } });
					} else if (访问路径 === 'admin/cf.json') {// CF配置文件
						return new Response(JSON.stringify(request.cf, null, 2), { status: 200, headers: { 'Content-Type': 'application/json;charset=utf-8' } });
					}

					ctx.waitUntil(fohn(env, request, 访问IP, 'Admin_Login', fug));
					return fetch(fws + '/admin' + url.search);
				} else if (访问路径 === 'logout' || uuidRegex.test(访问路径)) {//清除cookie并跳转到登录页面
					const 响应 = new Response('重定向中...', { status: 302, headers: { 'Location': '/login' } });
					响应.headers.set('Set-Cookie', 'auth=; Path=/; Max-Age=0; HttpOnly');
					return 响应;
				} else if (访问路径 === 'sub') {//处理订阅请求
					const 订阅TOKEN = await flay(host + userID), 作为优选订阅生成器 = ['1', 'true'].includes(env.BEST_SUB) && url.searchParams.get('host') === 'example.com' && url.searchParams.get('uuid') === '00000000-0000-4000-8000-000000000000' && UA.toLowerCase().includes('tunnel (https://github.com/' + fas[1] + '/edge');
					const 请求TOKEN = url.searchParams.get('token');
					const 用户客户端请求订阅 = 请求TOKEN === 订阅TOKEN;
					const 当前日序号 = Math.floor(Date.now() / 86400000);
					const 订阅转换后端TOKEN种子 = base64SecretEncode(订阅TOKEN, userID);
					const [今日订阅转换后端专属TOKEN, 昨日订阅转换后端专属TOKEN] = await Promise.all([
						flay(订阅转换后端TOKEN种子 + 当前日序号),
						flay(订阅转换后端TOKEN种子 + (当前日序号 - 1)),
					]);
					const 订阅转换后端请求订阅 = 请求TOKEN === 今日订阅转换后端专属TOKEN || 请求TOKEN === 昨日订阅转换后端专属TOKEN;
					if (用户客户端请求订阅 || 订阅转换后端请求订阅 || 作为优选订阅生成器) {
						fug = await fir(env, host, userID, UA);
						if (作为优选订阅生成器) ctx.waitUntil(fohn(env, request, 访问IP, 'Get_Best_SUB', fug, false));
						else ctx.waitUntil(fohn(env, request, 访问IP, 'Get_SUB', fug));
						const ua = UA.toLowerCase();
						const responseHeaders = {
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": fug.fray.fuzz,
							"Profile-web-page-url": url.protocol + '//' + url.host + '/admin',
							"Cache-Control": "no-store",
						};
						if (fug.CF.Usage.success) {
							const pagesSum = fug.CF.Usage.pages;
							const workersSum = fug.CF.Usage.workers;
							const total = Number.isFinite(fug.CF.Usage.max) ? (fug.CF.Usage.max / 1000) * 1024 : 1024 * 100;
							responseHeaders["Subscription-Userinfo"] = `upload=${pagesSum}; download=${workersSum}; total=${total}; expire=4102329600`; // 2099-12-31 到期时间
						}
						const isSubConverterRequest = url.searchParams.has('b64') || url.searchParams.has('base64') || request.headers.get('subconverter-request') || request.headers.get('subconverter-version') || ua.includes('subconverter') || ua.includes(('CF-Workers-SUB').toLowerCase()) || 作为优选订阅生成器;
						const 订阅类型 = isSubConverterRequest
							? 'mixed'
							: url.searchParams.has('target')
								? url.searchParams.get('target')
								: url.searchParams.has('clash') || ua.includes('clash') || ua.includes('meta') || ua.includes('mihomo')
									? 'clash'
									: url.searchParams.has('sb') || url.searchParams.has('singbox') || ua.includes('singbox') || ua.includes('sing-box')
										? 'singbox'
										: url.searchParams.has('surge') || ua.includes('surge')
											? 'surge&ver=4'
											: url.searchParams.has('quanx') || ua.includes('quantumult')
												? 'quanx'
												: url.searchParams.has('loon') || ua.includes('loon')
													? 'loon'
													: 'mixed';

						if (!ua.includes('mozilla')) responseHeaders["Content-Disposition"] = `attachment; filename*=utf-8''${encodeURIComponent(fug.fray.SUBNAME)}`;
						const 协议类型 = ((url.searchParams.has('surge') || ua.includes('surge')) && fug.协议类型 !== 'ss') ? 'tro' + 'jan' : fug.协议类型;
						let 订阅内容 = '';
						if (订阅类型 === 'mixed') {
							const TLS分片参数 = fug.TLS分片 == 'Shadowrocket' ? `&fragment=${encodeURIComponent('1,40-60,30-50,tlshello')}` : fug.TLS分片 == 'Happ' ? `&fragment=${encodeURIComponent('3,1,tlshello')}` : '';
							let 完整优选IP = [], 其他节点LINK = '', 反代IP池 = [];

							if (!url.searchParams.has('sub') && fug.fray.local) { // 本地生成订阅
								const 完整优选列表 = fug.fray.本地IP库.随机IP ? (
									await fa(request, fug.fray.本地IP库.随机数量, fug.fray.本地IP库.指定端口)
								)[0] : await env.KV.get('ADD.txt') ? await ala(await env.KV.get('ADD.txt')) : (
									await fa(request, fug.fray.本地IP库.随机数量, fug.fray.本地IP库.指定端口)
								)[0];
								const 优选API = [], 优选IP = [], 其他节点 = [];
								for (const 元素 of 完整优选列表) {
									if (元素.toLowerCase().startsWith('sub://')) {
										优选API.push(元素);
									} else {
										const 备注位置 = 元素.indexOf('#');
										const 地址部分 = 备注位置 > -1 ? 元素.slice(0, 备注位置) : 元素;
										const 备注部分 = 备注位置 > -1 ? 元素.slice(备注位置) : '';
										const subMatch = 元素.match(/sub\s*=\s*([^\s&#]+)/i);
										if (subMatch && subMatch[1].trim().includes('.')) {
											const 优选IP作为反代IP = 元素.toLowerCase().includes('proxyip=true');
											if (优选IP作为反代IP) 优选API.push('sub://' + subMatch[1].trim() + "?proxyip=true" + (元素.includes('#') ? ('#' + 元素.split('#')[1]) : ''));
											else 优选API.push('sub://' + subMatch[1].trim() + (元素.includes('#') ? ('#' + 元素.split('#')[1]) : ''));
										} else if (地址部分.toLowerCase().startsWith('https://')) {
											优选API.push(元素);
										} else if (地址部分.toLowerCase().includes('://')) {
											if (元素.includes('#')) {
												const 地址备注分离 = 元素.split('#');
												其他节点.push(地址备注分离[0] + '#' + encodeURIComponent(decodeURIComponent(地址备注分离[1])));
											} else 其他节点.push(元素);
										} else {
											if (地址部分.includes('*')) {
												优选IP.push(flat(地址部分) + 备注部分);
											} else 优选IP.push(元素);
										}
									}
								}
								const 请求优选API内容 = await co(优选API, '443', 本机标识头);
								const 合并其他节点数组 = [...new Set(其他节点.concat(请求优选API内容[1]))];
								其他节点LINK = 合并其他节点数组.length > 0 ? 合并其他节点数组.join('\n') + '\n' : '';
								const 优选API的IP = 请求优选API内容[0];
								反代IP池 = 请求优选API内容[3] || [];
								完整优选IP = [...new Set(优选IP.concat(优选API的IP))];
							} else { // 优选订阅生成器
								let 优选订阅生成器HOST = url.searchParams.get('sub') || fug.fray.SUB;
								const [优选生成器IP数组, 优选生成器其他节点] = await cbc(优选订阅生成器HOST, 本机标识头);
								完整优选IP = 完整优选IP.concat(优选生成器IP数组);
								其他节点LINK += 优选生成器其他节点;
							}
							const ECHLINK参数 = fug.ECH ? `&ech=${encodeURIComponent((fug.ECHConfig.SNI ? fug.ECHConfig.SNI + '+' : '') + fug.ECHConfig.DNS)}` : '';
							const isLoonOrSurge = ua.includes('loon') || ua.includes('surge');
							const { type: 传输协议, 路径字段名, 域名字段名 } = 获取传输协议配置(fug);
							订阅内容 = 其他节点LINK + 完整优选IP.map(原始地址 => {
								// 统一正则: 匹配 域名/IPv4/IPv6地址 + 可选端口 + 可选备注
								// 示例:
								//   - 域名: hj.xmm1993.top:2096#备注 或 example.com
								//   - IPv4: 166.0.188.128:443#Los Angeles 或 166.0.188.128
								//   - IPv6: [2606:4700::]:443#CMCC 或 [2606:4700::]
								const regex = /^(\[[\da-fA-F:]+\]|[\d.]+|[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)*)(?::(\d+))?(?:#(.+))?$/;
								const match = 原始地址.match(regex);

								let 节点地址, 节点端口 = "443", 节点备注;

								if (match) {
									节点地址 = match[1];  // IP地址或域名(可能带方括号)
									节点端口 = match[2] ? match[2] : '443';  // 端口默认443，SS noTLS在生成链接时再映射
									节点备注 = match[3] || 节点地址;  // 备注,默认为地址本身
								} else {
									// 不规范的格式，跳过处理返回null
									console.warn(`[订阅内容] 不规范的IP格式已忽略: ${原始地址}`);
									return null;
								}

								let fund = fug.fund;

								const 链式代理匹配 = 节点备注.match(/\$(socks5|http|https|turn|sstp):\/\/([^#\s]+)/i);
								if (链式代理匹配) {
									try {
										const 代理协议 = 链式代理匹配[1].toLowerCase(), 代理参数 = 链式代理匹配[2];
										const 链式代理数据 = { type: 代理协议, ...arp(代理参数, awe(代理协议)) };
										fund = `/video/${base64SecretEncode(JSON.stringify(链式代理数据), userID) + (fug.启用0RTT ? '?ed=2560' : '')}`;
										节点备注 = 节点备注.replace(链式代理匹配[0], '').trim() || 节点地址;
									} catch (error) {
										console.warn(`[订阅内容] 链式代理解析失败，已忽略该指令: ${链式代理匹配[0]} (${error && error.message ? error.message : error})`);
									}
								} else if (反代IP池.length > 0) {
									const 匹配到的反代IP = 反代IP池.find(p => p.includes(节点地址));
									if (匹配到的反代IP) fund = (`${fug.PATH}/proxyip=${匹配到的反代IP}`).replace(/\/\//g, '/') + (fug.启用0RTT ? '?ed=2560' : '');
								}
								if (isLoonOrSurge) fund = fund.replace(/,/g, '%2C');

								if (协议类型 === 'ss' && !作为优选订阅生成器) {
									if (!fug.SS.TLS) {
										const TLS端口 = [443, 2053, 2083, 2087, 2096, 8443];
										const NOTLS端口 = [80, 2052, 2082, 2086, 2095, 8080];
										节点端口 = String(NOTLS端口[TLS端口.indexOf(Number(节点端口))] ?? 节点端口);
									}
									fund = (fund.includes('?') ? fund.replace('?', '?enc=' + fug.SS.加密方式 + '&') : (fund + '?enc=' + fug.SS.加密方式)).replace(/([=,])/g, '\\$1');
									if (!isSubConverterRequest) fund = fund + ';mux=0';
									return `${协议类型}://${btoa(fug.SS.加密方式 + ':00000000-0000-4000-8000-000000000000')}@${节点地址}:${节点端口}?plugin=v2${encodeURIComponent('ray-plugin;mode=websocket;host=example.com;path=' + (fug.fume ? fizz(fund) : fund) + (fug.SS.TLS ? ';tls' : '')) + ECHLINK参数 + TLS分片参数}#${encodeURIComponent(节点备注)}`;
								} else {
									const 传输路径参数值 = 获取传输路径参数值(fug, fund, 作为优选订阅生成器);
									return `${协议类型}://00000000-0000-4000-8000-000000000000@${节点地址}:${节点端口}?security=tls&type=${传输协议 + ECHLINK参数}&${域名字段名}=example.com&fp=${fug.Fingerprint}&sni=example.com&${路径字段名}=${encodeURIComponent(传输路径参数值) + TLS分片参数}&encryption=none&alpn=${encodeURIComponent(fug.ALPN)}#${encodeURIComponent(节点备注)}`;
								}
							}).filter(item => item !== null).join('\n');
						} else { // 订阅转换
							const 订阅转换URL = `${fug.订阅转换配置.SUBAPI}/sub?target=${订阅类型}&url=${encodeURIComponent(url.protocol + '//' + url.host + '/sub?target=mixed&token=' + 今日订阅转换后端专属TOKEN + '&cnIspCode=' + faa(request) + (url.searchParams.has('sub') && url.searchParams.get('sub') != '' ? `&sub=${url.searchParams.get('sub')}` : ''))}&config=${encodeURIComponent(fug.订阅转换配置.SUBCONFIG)}&emoji=${fug.订阅转换配置.SUBEMOJI}&list=${fug.订阅转换配置.SUBLIST}&scv=${fug.fuse}&xudp=${fug.订阅转换配置.XUDP}&udp=${fug.订阅转换配置.UDP}&tls13=${fug.订阅转换配置.TLS13}&append_type=${fug.订阅转换配置.APPEND_TYPE}&sort=${fug.订阅转换配置.SORT}&expand=${fug.订阅转换配置.EXPAND}`;
							try {
								const response = await fetch(订阅转换URL, { headers: { 'User-Agent': 'Subconverter for ' + 订阅类型 + ' edge' + 'tunnel (https://github.com/' + fas[1] + '/edge' + 'tunnel) Uid/0x' + 本机标识头 + ' Version/' + cid } });
								if (response.ok) {
									订阅内容 = await response.text();
									if (url.searchParams.has('surge') || ua.includes('surge')) 订阅内容 = fuck(订阅内容, url.protocol + '//' + url.host + '/sub?token=' + 订阅TOKEN + '&surge', fug);
								} else return new Response('订阅转换后端异常：' + response.statusText, { status: response.status });
							} catch (error) {
								return new Response('订阅转换后端异常：' + error.message, { status: 403 });
							}
						}

						if (!ua.includes('subconverter') && 用户客户端请求订阅) {
							const 打乱后HOSTS = [...fug.HOSTS].sort(() => Math.random() - 0.5);
							let 替换域名计数 = 0, 当前随机HOST = null;
							订阅内容 = 订阅内容
								.replace(/00000000-0000-4000-8000-000000000000/g, fug.UUID)
								.replace(/MDAwMDAwMDAtMDAwMC00MDAwLTgwMDAtMDAwMDAwMDAwMDAw/g, btoa(fug.UUID))
								.replace(/example\.com/g, () => {
									if (替换域名计数 % 2 === 0) {
										const 原始host = 打乱后HOSTS[Math.floor(替换域名计数 / 2) % 打乱后HOSTS.length];
										当前随机HOST = flat(原始host);
									}
									替换域名计数++;
									return 当前随机HOST;
								});
						}

						if (订阅类型 === 'mixed' && (!ua.includes('mozilla') || url.searchParams.has('b64') || url.searchParams.has('base64'))) 订阅内容 = btoa(订阅内容);

						if (订阅类型 === 'singbox') {
							订阅内容 = await ga(订阅内容, fug);
							responseHeaders["content-type"] = 'application/json; charset=utf-8';
						} else if (订阅类型 === 'clash') {
							订阅内容 = Clash订阅配置文件热补丁(订阅内容, fug);
							responseHeaders["content-type"] = 'application/x-yaml; charset=utf-8';
						}
						return new Response(订阅内容, { status: 200, headers: responseHeaders });
					}
				} else if (访问路径 === 'locations') {//反代locations列表
					const cookies = request.headers.get('Cookie') || '';
					const authCookie = cookies.split(';').find(c => c.trim().startsWith('auth='))?.split('=')[1];
					if (authCookie && authCookie == await flay(UA + 加密秘钥 + 管理员密码)) return fetch(new Request('https://speed.cloudflare.com/locations', { headers: { 'Referer': 'https://speed.cloudflare.com/' } }));
				} else if (访问路径 === 'robots.txt') return new Response('User-agent: *\nDisallow: /', { status: 200, headers: { 'Content-Type': 'text/plain; charset=UTF-8' } });
			} else if (!envUUID) return fetch(fws + '/noKV').then(r => { const headers = new Headers(r.headers); headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate'); headers.set('Pragma', 'no-cache'); headers.set('Expires', '0'); return new Response(r.body, { status: 404, statusText: r.statusText, headers }) });
		}

		let 伪装页URL = env.URL || 'nginx';
		if (伪装页URL && 伪装页URL !== 'nginx' && 伪装页URL !== '1101') {
			伪装页URL = 伪装页URL.trim().replace(/\/$/, '');
			if (!伪装页URL.match(/^https?:\/\//i)) 伪装页URL = 'https://' + 伪装页URL;
			if (伪装页URL.toLowerCase().startsWith('http://')) 伪装页URL = 'https://' + 伪装页URL.substring(7);
			try { const u = new URL(伪装页URL); 伪装页URL = u.protocol + '//' + u.host } catch (e) { 伪装页URL = 'nginx' }
		}
		if (伪装页URL === '1101') return new Response(await aa(url.host, 访问IP), { status: 200, headers: { 'Content-Type': 'text/html; charset=UTF-8' } });
		try {
			const 反代URL = new URL(伪装页URL), 新请求头 = new Headers(request.headers);
			新请求头.set('Host', 反代URL.host);
			新请求头.set('Referer', 反代URL.origin);
			新请求头.set('Origin', 反代URL.origin);
			if (!新请求头.has('User-Agent') && UA && UA !== 'null') 新请求头.set('User-Agent', UA);
			const 反代响应 = await fetch(反代URL.origin + url.pathname + url.search, { method: request.method, headers: 新请求头, body: request.body, cf: request.cf });
			const 内容类型 = 反代响应.headers.get('content-type') || '';
			// 只处理文本类型的响应
			if (/text|javascript|json|xml/.test(内容类型)) {
				const 响应内容 = (await 反代响应.text()).replaceAll(反代URL.host, url.host);
				return new Response(响应内容, { status: 反代响应.status, headers: { ...Object.fromEntries(反代响应.headers), 'Cache-Control': 'no-store' } });
			}
			return 反代响应;
		} catch (error) { }
		return new Response(await ak(), { status: 200, headers: { 'Content-Type': 'text/html; charset=UTF-8' } });
	}
};
///////////////////////////////////////////////////////////////////////叉HTTP传输数据///////////////////////////////////////////////
const HPACKHuffman码长 = [
	13, 23, 28, 28, 28, 28, 28, 28, 28, 24, 30, 28, 28, 30, 28, 28,
	28, 28, 28, 28, 28, 28, 30, 28, 28, 28, 28, 28, 28, 28, 28, 28,
	6, 10, 10, 12, 13, 6, 8, 11, 10, 10, 8, 11, 8, 6, 6, 6,
	5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 7, 8, 15, 6, 12, 10,
	13, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
	7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 8, 13, 19, 13, 14, 6,
	15, 5, 6, 5, 6, 5, 6, 6, 6, 5, 7, 7, 6, 6, 6, 5,
	6, 7, 6, 5, 5, 6, 7, 7, 7, 7, 7, 15, 11, 14, 13, 28,
	20, 22, 20, 20, 22, 22, 22, 23, 22, 23, 23, 23, 23, 23, 24, 23,
	24, 24, 22, 23, 24, 23, 23, 23, 23, 21, 22, 23, 22, 23, 23, 24,
	22, 21, 20, 22, 22, 23, 23, 21, 23, 22, 22, 24, 21, 22, 23, 23,
	21, 21, 22, 21, 23, 22, 23, 23, 20, 22, 22, 22, 23, 22, 22, 23,
	26, 26, 20, 19, 22, 23, 22, 25, 26, 26, 26, 27, 27, 26, 24, 25,
	19, 21, 26, 27, 27, 26, 27, 24, 21, 21, 26, 26, 28, 27, 27, 27,
	20, 24, 20, 21, 22, 21, 21, 23, 22, 22, 25, 25, 24, 24, 26, 23,
	26, 27, 26, 26, 27, 27, 27, 27, 27, 28, 27, 27, 27, 27, 27, 26,
	30
];

function 获取本机标识(yourUUID) {
	return [yourUUID.slice(1, 7), '_' + yourUUID.slice(25, 31)];
}

function 计算HPACKHuffman字节长度(字符串) {
	const 字节 = new TextEncoder().encode(字符串);
	let 总位数 = 0;
	for (let i = 0; i < 字节.length; i++) {
		总位数 += HPACKHuffman码长[字节[i]];
	}
	return Math.ceil(总位数 / 8);
}

function 提取叉HTTPPadding值(request, 本机标识头, 本机标识键) {
	const 头值 = request.headers.get(本机标识头);
	if (头值) {
		try {
			const 解析URL = new URL(头值, 'https://x.invalid');
			const 查询值 = 解析URL.searchParams.get(本机标识键);
			if (查询值) return 查询值;
		} catch (e) { }
		return 头值;
	}
	const 请求URL = new URL(request.url);
	return 请求URL.searchParams.get(本机标识键) || '';
}

function 校验叉HTTPPadding(request, 本机标识头, 本机标识键) {
	const padding值 = 提取叉HTTPPadding值(request, 本机标识头, 本机标识键);
	if (!padding值) return true;
	const huffman长度 = 计算HPACKHuffman字节长度(padding值);
	return huffman长度 >= 98 && huffman长度 <= 1002;
}

const 叉HTTPBase62字符集 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
function 生成叉HTTPPadding串(长度) {
	const 字符集长度 = 叉HTTPBase62字符集.length;
	let 结果 = '';
	for (let i = 0; i < 长度; i++) {
		结果 += 叉HTTPBase62字符集[Math.floor(Math.random() * 字符集长度)];
	}
	return 结果;
}

async function 处理叉HTTP请求(request, yourUUID, 反代上下文 = {}) {
	if (!request.body) return new Response('Bad Request', { status: 400 });
	const [本机标识头, 本机标识键] = 获取本机标识(yourUUID);
	if (!校验叉HTTPPadding(request, 本机标识头, 本机标识键)) return new Response('Bad Request', { status: 400 });
	const reader = request.body.getReader();
	const 首包 = await 读取叉HTTP首包(reader, yourUUID);
	if (!首包) {
		try { reader.releaseLock() } catch (e) { }
		return new Response('Invalid request', { status: 400 });
	}
	if (isSpeedTestSite(首包.hostname) && 反代上下文.代理类型 === null) {
		try { reader.releaseLock() } catch (e) { }
		return new Response(构造本地204响应(首包.respHeader), {
			status: 200,
			headers: {
				'Content-Type': 'application/octet-stream',
				'X-Accel-Buffering': 'no',
				'Cache-Control': 'no-store'
			}
		});
	}
	if (首包.isUDP && 首包.协议 !== 'trojan' && 首包.port !== 53) {
		try { reader.releaseLock() } catch (e) { }
		return new Response('UDP is not supported', { status: 400 });
	}

	const responseHeaders = new Headers({
		'Content-Type': 'application/octet-stream',
		'X-Accel-Buffering': 'no',
		'Cache-Control': 'no-store'
	});

	try {
		const 响应URL = new URL('https://x.invalid/');
		响应URL.searchParams.set(本机标识键, 生成叉HTTPPadding串(100 + Math.floor(Math.random() * 901)));
		responseHeaders.set(本机标识头, 响应URL.toString());
	} catch (e) { }

	if (首包.isUDP) return 处理叉HTTPUDP请求(首包, reader, request, 反代上下文, responseHeaders);

	try { reader.releaseLock() } catch (e) { }

	const remoteConnWrapper = { socket: null, connectingPromise: null, retryConnect: null, downlinkDrain: Promise.resolve() };
	const abortController = new AbortController();
	let 已清理 = false;
	const 清理 = (reason) => {
		if (已清理) return;
		已清理 = true;
		try { abortController.abort(reason) } catch (e) { }
		失效TCP连接世代(remoteConnWrapper);
	};

	const 占位WS = { readyState: WebSocket.OPEN };

	let socket;
	try {
		socket = await forwardataTCP(首包.hostname, 首包.port, 首包.rawData, 占位WS, 首包.respHeader, remoteConnWrapper, yourUUID, request, 反代上下文, 首包.协议 === 'trojan', 首包.原始数据, true);
	} catch (err) {
		log(`[叉HTTP-Pipe] 连接失败: ${err?.message || err}`);
		清理(err);
		return new Response('bad gateway', { status: 502 });
	}
	if (!socket) {
		清理(new Error('socket is null'));
		return new Response('bad gateway', { status: 502 });
	}

	const 上行Promise = (async () => {
		const 上行合包器 = 创建上行Grain合包流();
		const 搬运Promise = 上行合包器.readable.pipeTo(socket.writable, { signal: abortController.signal });
		void 搬运Promise.catch(清理);
		const 上行reader = request.body.getReader();
		const 取消上行reader = () => {
			try { 上行reader.cancel(abortController.signal.reason).catch(() => { }); } catch (e) { }
		};
		abortController.signal.addEventListener('abort', 取消上行reader, { once: true });
		try {
			try {
				while (true) {
					const { done, value } = await 上行reader.read();
					if (done) break;
					if (value?.byteLength) await 上行合包器.写入(value);
				}
			} finally {
				abortController.signal.removeEventListener('abort', 取消上行reader);
				try { 上行reader.releaseLock() } catch (e) { }
			}
		} finally {
			try { await 上行合包器.结束() } catch (e) { }
		}
		await 搬运Promise;
	})();

	const 响应流 = typeof IdentityTransformStream !== 'undefined'
		? new IdentityTransformStream()
		: new TransformStream();
	const 下行Promise = (async () => {
		const writer = 响应流.writable.getWriter();
		try {
			if (有效数据长度(首包.respHeader) > 0) await writer.write(首包.respHeader);
		} catch (error) {
			try { await writer.abort(error) } catch (e) { }
			throw error;
		} finally {
			try { writer.releaseLock() } catch (e) { }
		}
		await socket.readable.pipeTo(响应流.writable, { signal: abortController.signal });
	})();

	void 上行Promise.catch(清理);
	void 下行Promise.then(() => 清理(), 清理);
	void Promise.allSettled([上行Promise, 下行Promise]);

	return new Response(响应流.readable, { status: 200, headers: responseHeaders });
}

function 处理叉HTTPUDP请求(首包, reader, request, 反代上下文, responseHeaders) {
	const 木马UDP上下文 = { 缓存: new Uint8Array(0), 反代地址: 反代上下文.木马反代地址 };
	return new Response(new ReadableStream({
		async start(controller) {
			let 已关闭 = false;
			let udpRespHeader = 首包.respHeader;
			const 叉桥 = {
				readyState: WebSocket.OPEN,
				send(data) {
					if (已关闭) return;
					try {
						const chunk = data instanceof Uint8Array
							? data
							: data instanceof ArrayBuffer
								? new Uint8Array(data)
								: ArrayBuffer.isView(data)
									? new Uint8Array(data.buffer, data.byteOffset, data.byteLength)
									: new Uint8Array(data);
						controller.enqueue(chunk);
					} catch (e) {
						已关闭 = true;
						this.readyState = WebSocket.CLOSED;
					}
				},
				close() {
					if (已关闭) return;
					已关闭 = true;
					this.readyState = WebSocket.CLOSED;
					try { controller.close() } catch (e) { }
				}
			};
			let 转发失败 = false;
			try {
				if (首包.协议 === 'trojan') {
					木马UDP上下文.目标主机 = 首包.hostname;
					木马UDP上下文.目标端口 = 首包.port;
					if (木马UDP上下文.反代地址) await hug(首包.原始数据, 叉桥, 木马UDP上下文, request);
				}
				if (!(首包.协议 === 'trojan' && 木马UDP上下文.反代地址) && 首包.rawData?.byteLength) {
					if (首包.协议 === 'trojan') await hug(首包.rawData, 叉桥, 木马UDP上下文, request);
					else await forwardataudp(首包.rawData, 叉桥, udpRespHeader, request);
					udpRespHeader = null;
				}
				while (true) {
					const { done, value } = await reader.read();
					if (done) break;
					if (!value || value.byteLength === 0) continue;
					if (首包.协议 === 'trojan') await hug(value, 叉桥, 木马UDP上下文, request);
					else await forwardataudp(value, 叉桥, udpRespHeader, request);
					udpRespHeader = null;
				}
			} catch (err) {
				转发失败 = true;
				log(`[叉HTTP转发] 处理失败: ${err?.message || err}`);
				closeSocketQuietly(叉桥);
			} finally {
				const 保持木马UDP反代下行 = !转发失败 && 首包.协议 === 'trojan' && 木马UDP上下文.反代地址 && 木马UDP上下文.iq;
				if (!保持木马UDP反代下行) {
					try { 木马UDP上下文.iq?.close() } catch (e) { }
					closeSocketQuietly(叉桥);
				}
				try { reader.releaseLock() } catch (e) { }
			}
		},
		cancel() {
			try { 木马UDP上下文.iq?.close() } catch (e) { }
			try { reader.releaseLock() } catch (e) { }
		}
	}), { status: 200, headers: responseHeaders });
}

function 有效数据长度(data) {
	if (!data) return 0;
	if (typeof data.byteLength === 'number') return data.byteLength;
	if (typeof data.length === 'number') return data.length;
	return 0;
}

function 失效TCP连接世代(remoteConnWrapper) {
	if (!remoteConnWrapper) return;
	remoteConnWrapper.generation = (Number.isInteger(remoteConnWrapper.generation) ? remoteConnWrapper.generation : 0) + 1;
	const socket = remoteConnWrapper.socket;
	remoteConnWrapper.socket = null;
	remoteConnWrapper.downlinkController = null;
	remoteConnWrapper.downlinkDrain = Promise.resolve();
	try { socket?.close?.() } catch (e) { }
}

function 开始TCP连接世代(remoteConnWrapper) {
	if (!Number.isInteger(remoteConnWrapper.generation)) remoteConnWrapper.generation = 0;
	const generation = ++remoteConnWrapper.generation;
	const previousSocket = remoteConnWrapper.socket;
	remoteConnWrapper.socket = null;
	const previousDownlink = remoteConnWrapper.downlinkController;
	remoteConnWrapper.downlinkController = null;
	const previousDrain = remoteConnWrapper.downlinkDrain || Promise.resolve();
	let currentDrain;
	try { currentDrain = previousDownlink?.停止并刷新?.() || Promise.resolve() }
	catch (error) { currentDrain = Promise.reject(error) }
	const downlinkDrain = Promise.all([previousDrain, currentDrain]);
	// Installation awaits this promise; attach a handler immediately in case draining fails before dialing completes.
	downlinkDrain.catch(() => { });
	remoteConnWrapper.downlinkDrain = downlinkDrain;
	try { previousSocket?.close?.() } catch (e) { }
	return { generation, downlinkDrain };
}

async function 读取叉HTTP首包(reader, token) {
	const decoder = 魏烈思文本解码器;

	const 尝试解析魏烈思首包 = (data) => {
		const length = data.byteLength;
		if (length < 18) return { 状态: 'need_more' };
		if (!UUID字节匹配(data, 1, token)) return { 状态: 'invalid' };

		const optLen = data[17];
		const cmdIndex = 18 + optLen;
		if (length < cmdIndex + 1) return { 状态: 'need_more' };

		const cmd = data[cmdIndex];
		if (cmd !== 1 && cmd !== 2) return { 状态: 'invalid' };

		const portIndex = cmdIndex + 1;
		if (length < portIndex + 3) return { 状态: 'need_more' };

		const port = (data[portIndex] << 8) | data[portIndex + 1];
		const addressType = data[portIndex + 2];
		const addressIndex = portIndex + 3;
		let headerLen = -1;
		let hostname = '';

		if (addressType === 1) {
			if (length < addressIndex + 4) return { 状态: 'need_more' };
			hostname = `${data[addressIndex]}.${data[addressIndex + 1]}.${data[addressIndex + 2]}.${data[addressIndex + 3]}`;
			headerLen = addressIndex + 4;
		} else if (addressType === 2) {
			if (length < addressIndex + 1) return { 状态: 'need_more' };
			const domainLen = data[addressIndex];
			if (length < addressIndex + 1 + domainLen) return { 状态: 'need_more' };
			hostname = decoder.decode(data.subarray(addressIndex + 1, addressIndex + 1 + domainLen));
			headerLen = addressIndex + 1 + domainLen;
		} else if (addressType === 3) {
			if (length < addressIndex + 16) return { 状态: 'need_more' };
			const ipv6 = [];
			for (let i = 0; i < 8; i++) {
				const base = addressIndex + i * 2;
				ipv6.push(((data[base] << 8) | data[base + 1]).toString(16));
			}
			hostname = ipv6.join(':');
			headerLen = addressIndex + 16;
		} else return { 状态: 'invalid' };

		if (!hostname) return { 状态: 'invalid' };

		return {
			状态: 'ok',
			结果: {
				协议: 'vl' + 'ess',
				hostname,
				port,
				isUDP: cmd === 2,
				rawData: data.subarray(headerLen),
				respHeader: new Uint8Array([data[0], 0]),
				原始数据: null,
			}
		};
	};

	const 尝试解析木马首包 = (data) => {
		const 密码哈希 = als(token);
		const 密码哈希字节 = new TextEncoder().encode(密码哈希);
		const length = data.byteLength;
		if (length < 58) return { 状态: 'need_more' };
		if (data[56] !== 0x0d || data[57] !== 0x0a) return { 状态: 'invalid' };
		for (let i = 0; i < 56; i++) {
			if (data[i] !== 密码哈希字节[i]) return { 状态: 'invalid' };
		}

		const socksStart = 58;
		if (length < socksStart + 2) return { 状态: 'need_more' };
		const cmd = data[socksStart];
		if (cmd !== 1 && cmd !== 3) return { 状态: 'invalid' };
		const isUDP = cmd === 3;

		const atype = data[socksStart + 1];
		let cursor = socksStart + 2;
		let hostname = '';

		if (atype === 1) {
			if (length < cursor + 4) return { 状态: 'need_more' };
			hostname = `${data[cursor]}.${data[cursor + 1]}.${data[cursor + 2]}.${data[cursor + 3]}`;
			cursor += 4;
		} else if (atype === 3) {
			if (length < cursor + 1) return { 状态: 'need_more' };
			const domainLen = data[cursor];
			if (length < cursor + 1 + domainLen) return { 状态: 'need_more' };
			hostname = decoder.decode(data.subarray(cursor + 1, cursor + 1 + domainLen));
			cursor += 1 + domainLen;
		} else if (atype === 4) {
			if (length < cursor + 16) return { 状态: 'need_more' };
			const ipv6 = [];
			for (let i = 0; i < 8; i++) {
				const base = cursor + i * 2;
				ipv6.push(((data[base] << 8) | data[base + 1]).toString(16));
			}
			hostname = ipv6.join(':');
			cursor += 16;
		} else return { 状态: 'invalid' };

		if (!hostname) return { 状态: 'invalid' };
		if (length < cursor + 4) return { 状态: 'need_more' };

		const port = (data[cursor] << 8) | data[cursor + 1];
		if (data[cursor + 2] !== 0x0d || data[cursor + 3] !== 0x0a) return { 状态: 'invalid' };
		const dataOffset = cursor + 4;

		return {
			状态: 'ok',
			结果: {
				协议: 'trojan',
				hostname,
				port,
				isUDP,
				rawData: data.subarray(dataOffset),
				原始数据: data,
				respHeader: null,
			}
		};
	};

	let buffer = new Uint8Array(1024);
	let offset = 0;

	while (true) {
		const { value, done } = await reader.read();
		if (done) {
			if (offset === 0) return null;
			break;
		}

		const chunk = value instanceof Uint8Array ? value : new Uint8Array(value);
		if (offset + chunk.byteLength > buffer.byteLength) {
			const newBuffer = new Uint8Array(Math.max(buffer.byteLength * 2, offset + chunk.byteLength));
			newBuffer.set(buffer.subarray(0, offset));
			buffer = newBuffer;
		}

		buffer.set(chunk, offset);
		offset += chunk.byteLength;

		const 当前数据 = buffer.subarray(0, offset);
		const 木马结果 = 尝试解析木马首包(当前数据);
		if (木马结果.状态 === 'ok') return { ...木马结果.结果, reader };

		const 魏烈思结果 = 尝试解析魏烈思首包(当前数据);
		if (魏烈思结果.状态 === 'ok') return { ...魏烈思结果.结果, reader };

		if (木马结果.状态 === 'invalid' && 魏烈思结果.状态 === 'invalid') return null;
	}

	const 最终数据 = buffer.subarray(0, offset);
	const 最终木马结果 = 尝试解析木马首包(最终数据);
	if (最终木马结果.状态 === 'ok') return { ...最终木马结果.结果, reader };
	const 最终魏烈思结果 = 尝试解析魏烈思首包(最终数据);
	if (最终魏烈思结果.状态 === 'ok') return { ...最终魏烈思结果.结果, reader };
	return null;
}
///////////////////////////////////////////////////////////////////////gRPC传输数据///////////////////////////////////////////////
async function 处理gRPC请求(request, yourUUID, 反代上下文 = {}) {
	if (!request.body) return new Response('Bad Request', { status: 400 });
	const reader = request.body.getReader();
	const remoteConnWrapper = { socket: null, connectingPromise: null, retryConnect: null, downlinkDrain: Promise.resolve() };
	const 失效远端连接 = () => 失效TCP连接世代(remoteConnWrapper);
	let isDnsQuery = false;
	const 木马UDP上下文 = { 缓存: new Uint8Array(0), 反代地址: 反代上下文.木马反代地址 };
	let 判断是否是木马 = null;
	let 当前写入Socket = null;
	let 远端写入器 = null;
	let GRPC上行写入队列 = null;
	//log('[gRPC] 开始处理双向流');
	const grpcHeaders = new Headers({
		'Content-Type': 'application/grpc',
		'grpc-status': '0',
		'X-Accel-Buffering': 'no',
		'Cache-Control': 'no-store'
	});

	const 下行缓存上限 = fail;
	const 下行刷新间隔 = 1;

	return new Response(new ReadableStream({
		async start(controller) {
			let 已关闭 = false;
			let 发送队列 = [];
			let 队列字节数 = 0;
			let 刷新定时器 = null;
			let 刷新Microtask已排队 = false;
			const grpcBridge = {
				readyState: WebSocket.OPEN,
				send(data) {
					if (已关闭) return;
					const chunk = data instanceof Uint8Array ? data : new Uint8Array(data);
					const lenBytes数组 = [];
					let remaining = chunk.byteLength >>> 0;
					while (remaining > 127) {
						lenBytes数组.push((remaining & 0x7f) | 0x80);
						remaining >>>= 7;
					}
					lenBytes数组.push(remaining);
					const lenBytes = new Uint8Array(lenBytes数组);
					const protobufLen = 1 + lenBytes.length + chunk.byteLength;
					const frame = new Uint8Array(5 + protobufLen);
					frame[0] = 0;
					frame[1] = (protobufLen >>> 24) & 0xff;
					frame[2] = (protobufLen >>> 16) & 0xff;
					frame[3] = (protobufLen >>> 8) & 0xff;
					frame[4] = protobufLen & 0xff;
					frame[5] = 0x0a;
					frame.set(lenBytes, 6);
					frame.set(chunk, 6 + lenBytes.length);
					发送队列.push(frame);
					队列字节数 += frame.byteLength;
					安排刷新发送队列();
				},
				close() {
					if (this.readyState === WebSocket.CLOSED) return;
					刷新发送队列(true);
					已关闭 = true;
					this.readyState = WebSocket.CLOSED;
					try { controller.close() } catch (e) { }
				}
			};

			const 刷新发送队列 = (force = false) => {
				刷新Microtask已排队 = false;
				if (刷新定时器) {
					clearTimeout(刷新定时器);
					刷新定时器 = null;
				}
				if ((!force && 已关闭) || 队列字节数 === 0) return;
				const out = new Uint8Array(队列字节数);
				let offset = 0;
				for (const item of 发送队列) {
					out.set(item, offset);
					offset += item.byteLength;
				}
				发送队列 = [];
				队列字节数 = 0;
				try {
					controller.enqueue(out);
				} catch (e) {
					已关闭 = true;
					grpcBridge.readyState = WebSocket.CLOSED;
				}
			};

			const 安排刷新发送队列 = () => {
				if (队列字节数 >= 下行缓存上限) {
					刷新发送队列();
					return;
				}
				if (刷新Microtask已排队 || 刷新定时器) return;
				刷新Microtask已排队 = true;
				queueMicrotask(() => {
					刷新Microtask已排队 = false;
					if (已关闭 || 队列字节数 === 0 || 刷新定时器) return;
					刷新定时器 = setTimeout(刷新发送队列, 下行刷新间隔);
				});
			};

			const 关闭连接 = () => {
				if (已关闭) return;
				GRPC上行写入队列?.清空();
				失效远端连接();
				刷新发送队列(true);
				已关闭 = true;
				grpcBridge.readyState = WebSocket.CLOSED;
				if (刷新定时器) clearTimeout(刷新定时器);
				if (远端写入器) {
					try { 远端写入器.releaseLock() } catch (e) { }
					远端写入器 = null;
				}
				当前写入Socket = null;
				try { reader.releaseLock() } catch (e) { }
				try { 木马UDP上下文.iq?.close() } catch (e) { }
				try { controller.close() } catch (e) { }
			};

			const 释放远端写入器 = () => {
				if (远端写入器) {
					try { 远端写入器.releaseLock() } catch (e) { }
					远端写入器 = null;
				}
				当前写入Socket = null;
			};

			const 上行写入队列 = GRPC上行写入队列 = 创建上行写入队列({
				获取写入器: () => {
					const socket = remoteConnWrapper.socket;
					if (!socket) return null;
					if (socket !== 当前写入Socket) {
						释放远端写入器();
						当前写入Socket = socket;
						远端写入器 = socket.writable.getWriter();
					}
					return 远端写入器;
				},
				获取连接任务: () => remoteConnWrapper.connectingPromise,
				释放写入器: 释放远端写入器,
				重试连接: async () => {
					if (typeof remoteConnWrapper.retryConnect !== 'function') throw new Error('retry unavailable');
					await remoteConnWrapper.retryConnect();
				},
				关闭连接,
				名称: 'gRPC上行'
			});

			const 写入远端 = async (payload, allowRetry = true) => {
				return 上行写入队列.写入并等待(payload, allowRetry);
			};

			let 转发失败 = false;
			try {
				let pending = new Uint8Array(0);
				while (true) {
					const { done, value } = await reader.read();
					if (done) break;
					if (!value || value.byteLength === 0) continue;
					const 当前块 = value instanceof Uint8Array ? value : new Uint8Array(value);
					const merged = new Uint8Array(pending.length + 当前块.length);
					merged.set(pending, 0);
					merged.set(当前块, pending.length);
					pending = merged;
					while (pending.byteLength >= 5) {
						const grpcLen = ((pending[1] << 24) >>> 0) | (pending[2] << 16) | (pending[3] << 8) | pending[4];
						const frameSize = 5 + grpcLen;
						if (pending.byteLength < frameSize) break;
						const grpcPayload = pending.subarray(5, frameSize);
						pending = pending.slice(frameSize);
						if (!grpcPayload.byteLength) continue;
						let payload = grpcPayload;
						if (payload.byteLength >= 2 && payload[0] === 0x0a) {
							let shift = 0;
							let offset = 1;
							let varint有效 = false;
							while (offset < payload.length) {
								const current = payload[offset++];
								if ((current & 0x80) === 0) {
									varint有效 = true;
									break;
								}
								shift += 7;
								if (shift > 35) break;
							}
							if (varint有效) payload = payload.subarray(offset);
						}
						if (!payload.byteLength) continue;
						if (isDnsQuery) {
							if (判断是否是木马) await hug(payload, grpcBridge, 木马UDP上下文, request);
							else await forwardataudp(payload, grpcBridge, null, request);
							continue;
						}
						if (remoteConnWrapper.socket || remoteConnWrapper.connectingPromise) {
							if (!(await 写入远端(payload))) throw new Error('Remote socket is not ready');
						} else {
							const 首包bytes = hog(payload);
							if (判断是否是木马 === null) 判断是否是木马 = 首包bytes.byteLength >= 58 && 首包bytes[56] === 0x0d && 首包bytes[57] === 0x0a;
							if (判断是否是木马) {
								const 解析结果 = 解析木马请求(首包bytes, yourUUID);
								if (解析结果?.hasError) throw new Error(解析结果.message || 'Invalid trojan request');
								const { port, hostname, rawClientData, isUDP } = 解析结果;
								log(`[gRPC] 木马首包: ${hostname}:${port} | UDP: ${isUDP ? '是' : '否'}`);
								if (isSpeedTestSite(hostname) && 反代上下文.代理类型 === null) {
									grpcBridge.send(构造本地204响应());
									return;
								}
								if (isUDP) {
									isDnsQuery = true;
									木马UDP上下文.目标主机 = hostname;
									木马UDP上下文.目标端口 = port;
									if (木马UDP上下文.反代地址) await hug(首包bytes, grpcBridge, 木马UDP上下文, request);
									else if (有效数据长度(rawClientData) > 0) await hug(rawClientData, grpcBridge, 木马UDP上下文, request);
								} else {
									await forwardataTCP(hostname, port, rawClientData, grpcBridge, null, remoteConnWrapper, yourUUID, request, 反代上下文, true, 首包bytes);
								}
							} else {
								判断是否是木马 = false;
								const 解析结果 = 解析魏烈思请求(首包bytes, yourUUID);
								if (解析结果?.hasError) throw new Error(解析结果.message || 'Invalid 魏烈思 request');
								const { port, hostname, version, isUDP, rawClientData } = 解析结果;
								log(`[gRPC] 魏烈思首包: ${hostname}:${port} | UDP: ${isUDP ? '是' : '否'}`);
								const respHeader = new Uint8Array([version, 0]);
								if (isSpeedTestSite(hostname) && 反代上下文.代理类型 === null) {
									grpcBridge.send(构造本地204响应(respHeader));
									return;
								}
								if (isUDP) {
									if (port !== 53) throw new Error('UDP is not supported');
									isDnsQuery = true;
								}
								grpcBridge.send(respHeader);
								const rawData = rawClientData;
								if (isDnsQuery) {
									if (判断是否是木马) await hug(rawData, grpcBridge, 木马UDP上下文, request);
									else await forwardataudp(rawData, grpcBridge, null, request);
								}
								else await forwardataTCP(hostname, port, rawData, grpcBridge, null, remoteConnWrapper, yourUUID, request, 反代上下文);
							}
						}
					}
					刷新发送队列();
				}
				await 上行写入队列.等待空();
			} catch (err) {
				转发失败 = true;
				log(`[gRPC转发] 处理失败: ${err?.message || err}`);
			} finally {
				const 保持木马UDP反代下行 = !转发失败 && isDnsQuery && 判断是否是木马 && 木马UDP上下文.反代地址 && 木马UDP上下文.iq;
				if (保持木马UDP反代下行) {
					上行写入队列.清空();
					失效远端连接();
					释放远端写入器();
					try { reader.releaseLock() } catch (e) { }
				} else {
					关闭连接();
				}
			}
		},
		cancel() {
			GRPC上行写入队列?.清空();
			失效远端连接();
			try { 木马UDP上下文.iq?.close() } catch (e) { }
			try { reader.releaseLock() } catch (e) { }
		}
	}), { status: 200, headers: grpcHeaders });
}

function 是有效WS早期数据(bytes, token) {
	if (!bytes?.byteLength) return false;
	if (bytes.byteLength >= 18 && UUID字节匹配(bytes, 1, token)) return true;
	if (bytes.byteLength < 58 || bytes[56] !== 0x0d || bytes[57] !== 0x0a) return false;

	const trojanPassword = als(token);
	for (let i = 0; i < 56; i++) {
		if (bytes[i] !== trojanPassword.charCodeAt(i)) return false;
	}
	return true;
}

function 解码WS早期数据(header, token) {
	if (!header) return null;
	if (header.length > fact) throw new Error('early data is too large');

	let bytes;
	const Uint8ArrayBase64 = /** @type {any} */ (Uint8Array);
	if (typeof Uint8ArrayBase64.fromBase64 === 'function') {
		try {
			bytes = Uint8ArrayBase64.fromBase64(header, { alphabet: 'base64url' });
		} catch (_) { }
	}
	if (!bytes) {
		let normalized = header.replace(/-/g, '+').replace(/_/g, '/');
		const padding = normalized.length % 4;
		if (padding) normalized += '='.repeat(4 - padding);
		let binaryString;
		try {
			binaryString = atob(normalized);
		} catch (_) {
			return null;
		}
		bytes = new Uint8Array(binaryString.length);
		for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
	}

	if (bytes.byteLength > face) throw new Error('early data is too large');
	return 是有效WS早期数据(bytes, token) ? bytes : null;
}

///////////////////////////////////////////////////////////////////////WS传输数据///////////////////////////////////////////////
async function 处理WS请求(request, yourUUID, url, 反代上下文 = {}) {
	const WS套接字对 = new WebSocketPair();
	const [clientSock, serverSock] = Object.values(WS套接字对);
	try { (/** @type {any} */ (serverSock)).accept({ allowHalfOpen: true }) }
	catch (_) { serverSock.accept() }
	serverSock.binaryType = 'arraybuffer';
	let remoteConnWrapper = { socket: null, connectingPromise: null, retryConnect: null, downlinkDrain: Promise.resolve() };
	const 失效远端连接 = () => 失效TCP连接世代(remoteConnWrapper);
	let isDnsQuery = false;
	let 判断是否是木马 = null;
	const 木马UDP上下文 = { 缓存: new Uint8Array(0), 反代地址: 反代上下文.木马反代地址 };
	const earlyDataHeader = request.headers.get('sec-websocket-protocol') || '';
	const SS模式禁用EarlyData = !!url.searchParams.get('enc');
	let WS上行写入队列 = null;
	let WS显式传输链 = Promise.resolve();
	let WS显式传输停止接收 = false, WS显式传输失败 = false, WS显式传输收尾已入队 = false;
	let WS显式队列字节 = 0, WS显式队列条目 = 0;
	let 判断协议类型 = null, 当前写入Socket = null, 远端写入器 = null;
	let ss上下文 = null, ss初始化任务 = null;
	let WS本地测速模式 = false, WS本地测速回包Socket = null;
	let WS本地测速请求缓存 = new Uint8Array(0);
	let WS本地测速首包响应头 = null;
	const WS本地测速请求上限 = 64 * 1024;

	const 发送WS本地测速响应 = async () => {
		if (!WS本地测速回包Socket) return;
		const respHeader = WS本地测速首包响应头;
		WS本地测速首包响应头 = null;
		await WebSocket发送并等待(WS本地测速回包Socket, 构造WS本地204响应(respHeader));
	};

	const 查找HTTP请求头结尾 = (data) => {
		for (let i = 0; i <= data.byteLength - 4; i++) {
			if (data[i] === 0x0d && data[i + 1] === 0x0a && data[i + 2] === 0x0d && data[i + 3] === 0x0a) return i + 4;
		}
		return -1;
	};

	const 处理WS本地测速数据 = async (data) => {
		const chunk = hog(data);
		if (!chunk.byteLength) return;
		if (WS本地测速请求缓存.byteLength + chunk.byteLength > WS本地测速请求上限) throw new Error('WS local speed-test request is too large');
		WS本地测速请求缓存 = hot(WS本地测速请求缓存, chunk);

		while (WS本地测速请求缓存.byteLength) {
			const headerEnd = 查找HTTP请求头结尾(WS本地测速请求缓存);
			if (headerEnd === -1) return;
			const headerText = 魏烈思文本解码器.decode(WS本地测速请求缓存.subarray(0, headerEnd));
			const contentLengthMatch = headerText.match(/(?:^|\r\n)content-length\s*:\s*(\d+)/i);
			const contentLength = contentLengthMatch ? Number(contentLengthMatch[1]) : 0;
			const requestLength = headerEnd + contentLength;
			if (!Number.isSafeInteger(contentLength) || requestLength > WS本地测速请求上限) throw new Error('WS local speed-test request body is too large');
			if (WS本地测速请求缓存.byteLength < requestLength) return;
			WS本地测速请求缓存 = WS本地测速请求缓存.slice(requestLength);
			await 发送WS本地测速响应();
		}
	};

	const 启用WS本地测速模式 = async (回包Socket, respHeader = null, 首请求数据 = null) => {
		WS本地测速模式 = true;
		WS本地测速回包Socket = 回包Socket;
		WS本地测速请求缓存 = new Uint8Array(0);
		WS本地测速首包响应头 = respHeader;
		if (有效数据长度(首请求数据) > 0) await 处理WS本地测速数据(首请求数据);
	};

	const 释放远端写入器 = () => {
		if (远端写入器) {
			try { 远端写入器.releaseLock() } catch (e) { }
			远端写入器 = null;
		}
		当前写入Socket = null;
	};

	const 上行写入队列 = WS上行写入队列 = 创建上行写入队列({
		获取写入器: () => {
			const socket = remoteConnWrapper.socket;
			if (!socket) return null;
			if (socket !== 当前写入Socket) {
				释放远端写入器();
				当前写入Socket = socket;
				远端写入器 = socket.writable.getWriter();
			}
			return 远端写入器;
		},
		获取连接任务: () => remoteConnWrapper.connectingPromise,
		释放写入器: 释放远端写入器,
		重试连接: async () => {
			if (typeof remoteConnWrapper.retryConnect !== 'function') throw new Error('retry unavailable');
			await remoteConnWrapper.retryConnect();
		},
		关闭连接: err => 处理WS显式传输错误(err),
		名称: 'WS上行'
	});

	const 写入远端 = async (chunk, allowRetry = true) => {
		return 上行写入队列.写入(chunk, allowRetry);
	};

	const 获取SS上下文 = async () => {
		if (ss上下文) return ss上下文;
		if (!ss初始化任务) {
			ss初始化任务 = (async () => {
				const 请求加密方式 = (url.searchParams.get('enc') || '').toLowerCase();
				const 首选加密配置 = SS支持加密配置[请求加密方式] || SS支持加密配置['aes-128-gcm'];
				const 入站候选加密配置 = [首选加密配置, ...Object.values(SS支持加密配置).filter(c => c.method !== 首选加密配置.method)];
				const 入站主密钥任务缓存 = new Map();
				const 取入站主密钥任务 = (config) => {
					if (!入站主密钥任务缓存.has(config.method)) 入站主密钥任务缓存.set(config.method, SS派生主密钥(yourUUID, config.keyLen));
					return 入站主密钥任务缓存.get(config.method);
				};
				const 入站状态 = {
					buffer: new Uint8Array(0),
					hasSalt: false,
					waitPayloadLength: null,
					decryptKey: null,
					nonceCounter: new Uint8Array(SSNonce长度),
					加密配置: null,
				};
				const 初始化入站解密状态 = async () => {
					const lengthCipherTotalLength = 2 + SSAEAD标签长度;
					const 最大盐长度 = Math.max(...入站候选加密配置.map(c => c.saltLen));
					const 最大对齐扫描字节 = 16;
					const 可扫描最大偏移 = Math.min(最大对齐扫描字节, Math.max(0, 入站状态.buffer.byteLength - (lengthCipherTotalLength + Math.min(...入站候选加密配置.map(c => c.saltLen)))));
					for (let offset = 0; offset <= 可扫描最大偏移; offset++) {
						for (const 加密配置 of 入站候选加密配置) {
							const 初始化最小长度 = offset + 加密配置.saltLen + lengthCipherTotalLength;
							if (入站状态.buffer.byteLength < 初始化最小长度) continue;
							const salt = 入站状态.buffer.subarray(offset, offset + 加密配置.saltLen);
							const lengthCipher = 入站状态.buffer.subarray(offset + 加密配置.saltLen, 初始化最小长度);
							const masterKey = await 取入站主密钥任务(加密配置);
							const decryptKey = await SS派生会话密钥(加密配置, masterKey, salt, ['decrypt']);
							const nonceCounter = new Uint8Array(SSNonce长度);
							try {
								const lengthPlain = await SSAEAD解密(decryptKey, nonceCounter, lengthCipher);
								if (lengthPlain.byteLength !== 2) continue;
								const payloadLength = (lengthPlain[0] << 8) | lengthPlain[1];
								if (payloadLength < 0 || payloadLength > 加密配置.maxChunk) continue;
								if (offset > 0) log(`[SS入站] 检测到前导噪声 ${offset}B，已自动对齐`);
								if (加密配置.method !== 首选加密配置.method) log(`[SS入站] URL enc=${请求加密方式 || 首选加密配置.method} 与实际 ${加密配置.method} 不一致，已自动切换`);
								入站状态.buffer = 入站状态.buffer.subarray(初始化最小长度);
								入站状态.decryptKey = decryptKey;
								入站状态.nonceCounter = nonceCounter;
								入站状态.waitPayloadLength = payloadLength;
								入站状态.加密配置 = 加密配置;
								入站状态.hasSalt = true;
								return true;
							} catch (_) { }
						}
					}
					const 初始化失败判定长度 = 最大盐长度 + lengthCipherTotalLength + 最大对齐扫描字节;
					if (入站状态.buffer.byteLength >= 初始化失败判定长度) {
						throw new Error(`SS handshake decrypt failed (enc=${请求加密方式 || 'auto'}, candidates=${入站候选加密配置.map(c => c.method).join('/')})`);
					}
					return false;
				};
				const 入站解密器 = {
					async 输入(dataChunk) {
						const chunk = hog(dataChunk);
						if (chunk.byteLength > 0) 入站状态.buffer = hot(入站状态.buffer, chunk);
						if (!入站状态.hasSalt) {
							const 初始化成功 = await 初始化入站解密状态();
							if (!初始化成功) return [];
						}
						const plaintextChunks = [];
						while (true) {
							if (入站状态.waitPayloadLength === null) {
								const lengthCipherTotalLength = 2 + SSAEAD标签长度;
								if (入站状态.buffer.byteLength < lengthCipherTotalLength) break;
								const lengthCipher = 入站状态.buffer.subarray(0, lengthCipherTotalLength);
								入站状态.buffer = 入站状态.buffer.subarray(lengthCipherTotalLength);
								const lengthPlain = await SSAEAD解密(入站状态.decryptKey, 入站状态.nonceCounter, lengthCipher);
								if (lengthPlain.byteLength !== 2) throw new Error('SS length decrypt failed');
								const payloadLength = (lengthPlain[0] << 8) | lengthPlain[1];
								if (payloadLength < 0 || payloadLength > 入站状态.加密配置.maxChunk) throw new Error(`SS payload length invalid: ${payloadLength}`);
								入站状态.waitPayloadLength = payloadLength;
							}
							const payloadCipherTotalLength = 入站状态.waitPayloadLength + SSAEAD标签长度;
							if (入站状态.buffer.byteLength < payloadCipherTotalLength) break;
							const payloadCipher = 入站状态.buffer.subarray(0, payloadCipherTotalLength);
							入站状态.buffer = 入站状态.buffer.subarray(payloadCipherTotalLength);
							const payloadPlain = await SSAEAD解密(入站状态.decryptKey, 入站状态.nonceCounter, payloadCipher);
							plaintextChunks.push(payloadPlain);
							入站状态.waitPayloadLength = null;
						}
						return plaintextChunks;
					},
				};
				let 出站加密器 = null;
				const SS单批最大字节 = 32 * 1024;
				const 获取出站加密器 = async () => {
					if (出站加密器) return 出站加密器;
					if (!入站状态.加密配置) throw new Error('SS cipher is not negotiated');
					const 出站加密配置 = 入站状态.加密配置;
					const 出站主密钥 = await SS派生主密钥(yourUUID, 出站加密配置.keyLen);
					const 出站随机字节 = crypto.getRandomValues(new Uint8Array(出站加密配置.saltLen));
					const 出站加密密钥 = await SS派生会话密钥(出站加密配置, 出站主密钥, 出站随机字节, ['encrypt']);
					const 出站Nonce计数器 = new Uint8Array(SSNonce长度);
					let 随机字节已发送 = false;
					出站加密器 = {
						async 加密并发送(dataChunk, sendChunk) {
							const plaintextData = hog(dataChunk);
							if (!随机字节已发送) {
								await sendChunk(出站随机字节);
								随机字节已发送 = true;
							}
							if (plaintextData.byteLength === 0) return;
							let offset = 0;
							while (offset < plaintextData.byteLength) {
								const end = Math.min(offset + 出站加密配置.maxChunk, plaintextData.byteLength);
								const payloadPlain = plaintextData.subarray(offset, end);
								const lengthPlain = new Uint8Array(2);
								lengthPlain[0] = (payloadPlain.byteLength >>> 8) & 0xff;
								lengthPlain[1] = payloadPlain.byteLength & 0xff;
								const lengthCipher = await SSAEAD加密(出站加密密钥, 出站Nonce计数器, lengthPlain);
								const payloadCipher = await SSAEAD加密(出站加密密钥, 出站Nonce计数器, payloadPlain);
								const frame = new Uint8Array(lengthCipher.byteLength + payloadCipher.byteLength);
								frame.set(lengthCipher, 0);
								frame.set(payloadCipher, lengthCipher.byteLength);
								await sendChunk(frame);
								offset = end;
							}
						},
					};
					return 出站加密器;
				};
				let SS发送队列 = Promise.resolve();
				const SS入队发送 = (chunk) => {
					SS发送队列 = SS发送队列.then(async () => {
						if (serverSock.readyState !== WebSocket.OPEN) return;
						const 已初始化出站加密器 = await 获取出站加密器();
						await 已初始化出站加密器.加密并发送(chunk, async (encryptedChunk) => {
							if (encryptedChunk.byteLength > 0 && serverSock.readyState === WebSocket.OPEN) {
								await WebSocket发送并等待(serverSock, encryptedChunk.buffer);
							}
						});
					}).catch((error) => {
						log(`[SS发送] 加密失败: ${error?.message || error}`);
						closeSocketQuietly(serverSock);
					});
					return SS发送队列;
				};
				const 回包Socket = {
					get readyState() {
						return serverSock.readyState;
					},
					send(data) {
						const chunk = hog(data);
						if (chunk.byteLength <= SS单批最大字节) {
							return SS入队发送(chunk);
						}
						for (let i = 0; i < chunk.byteLength; i += SS单批最大字节) {
							SS入队发送(chunk.subarray(i, Math.min(i + SS单批最大字节, chunk.byteLength)));
						}
						return SS发送队列;
					},
					close() {
						closeSocketQuietly(serverSock);
					}
				};
				ss上下文 = {
					入站解密器,
					回包Socket,
					首包已建立: false,
					目标主机: '',
					目标端口: 0,
				};
				return ss上下文;
			})().finally(() => { ss初始化任务 = null });
		}
		return ss初始化任务;
	};

	const 处理SS数据 = async (chunk) => {
		const 上下文 = await 获取SS上下文();
		let 明文块数组 = null;
		try {
			明文块数组 = await 上下文.入站解密器.输入(chunk);
		} catch (err) {
			const msg = err?.message || `${err}`;
			if (msg.includes('Decryption failed') || msg.includes('SS handshake decrypt failed') || msg.includes('SS length decrypt failed')) {
				log(`[SS入站] 解密失败，连接关闭: ${msg}`);
				closeSocketQuietly(serverSock);
				return;
			}
			throw err;
		}
		for (const 明文块 of 明文块数组) {
			if (WS本地测速模式) {
				await 处理WS本地测速数据(明文块);
				continue;
			}
			let 已写入 = false;
			try {
				已写入 = await 写入远端(明文块, false);
			} catch (err) {
				if ((/** @type {any} */ (err))?.isQueueOverflow) throw err;
				已写入 = false;
			}
			if (已写入) continue;
			if (上下文.首包已建立 && 上下文.目标主机 && 上下文.目标端口 > 0) {
				await forwardataTCP(上下文.目标主机, 上下文.目标端口, 明文块, 上下文.回包Socket, null, remoteConnWrapper, yourUUID, request, 反代上下文);
				continue;
			}
			const 明文数据 = hog(明文块);
			if (明文数据.byteLength < 3) throw new Error('invalid ss data');
			const addressType = 明文数据[0];
			let cursor = 1;
			let hostname = '';
			if (addressType === 1) {
				if (明文数据.byteLength < cursor + 4 + 2) throw new Error('invalid ss ipv4 length');
				hostname = `${明文数据[cursor]}.${明文数据[cursor + 1]}.${明文数据[cursor + 2]}.${明文数据[cursor + 3]}`;
				cursor += 4;
			} else if (addressType === 3) {
				if (明文数据.byteLength < cursor + 1) throw new Error('invalid ss domain length');
				const domainLength = 明文数据[cursor];
				cursor += 1;
				if (明文数据.byteLength < cursor + domainLength + 2) throw new Error('invalid ss domain data');
				hostname = SS文本解码器.decode(明文数据.subarray(cursor, cursor + domainLength));
				cursor += domainLength;
			} else if (addressType === 4) {
				if (明文数据.byteLength < cursor + 16 + 2) throw new Error('invalid ss ipv6 length');
				const ipv6 = [];
				const ipv6View = new DataView(明文数据.buffer, 明文数据.byteOffset + cursor, 16);
				for (let i = 0; i < 8; i++) ipv6.push(ipv6View.getUint16(i * 2).toString(16));
				hostname = ipv6.join(':');
				cursor += 16;
			} else {
				throw new Error(`invalid ss addressType: ${addressType}`);
			}
			if (!hostname) throw new Error(`invalid ss address: ${addressType}`);
			const port = (明文数据[cursor] << 8) | 明文数据[cursor + 1];
			cursor += 2;
			const rawClientData = 明文数据.subarray(cursor);
			if (isSpeedTestSite(hostname) && 反代上下文.代理类型 === null) {
				await 启用WS本地测速模式(上下文.回包Socket, null, rawClientData);
				return;
			}
			上下文.首包已建立 = true;
			上下文.目标主机 = hostname;
			上下文.目标端口 = port;
			await forwardataTCP(hostname, port, rawClientData, 上下文.回包Socket, null, remoteConnWrapper, yourUUID, request, 反代上下文);
		}
	};

	const 处理WS入站数据 = async (chunk) => {
		let 当前块字节 = null;
		if (isDnsQuery) {
			if (判断是否是木马) return await hug(chunk, serverSock, 木马UDP上下文, request);
			return await forwardataudp(chunk, serverSock, null, request);
		}
		if (判断协议类型 === 'ss') {
			await 处理SS数据(chunk);
			return;
		}
		if (WS本地测速模式) {
			await 处理WS本地测速数据(chunk);
			return;
		}
		if (await 写入远端(chunk)) return;

		if (判断协议类型 === null) {
			if (url.searchParams.get('enc')) 判断协议类型 = 'ss';
			else {
				当前块字节 = 当前块字节 || hog(chunk);
				const bytes = 当前块字节;
				判断协议类型 = bytes.byteLength >= 58 && bytes[56] === 0x0d && bytes[57] === 0x0a ? '木马' : '魏烈思';
			}
			判断是否是木马 = 判断协议类型 === '木马';
			log(`[WS转发] 协议类型: ${判断协议类型} | 来自: ${url.host} | UA: ${request.headers.get('user-agent') || '未知'}`);
		}

		if (判断协议类型 === 'ss') {
			await 处理SS数据(chunk);
			return;
		}
		if (await 写入远端(chunk)) return;
		if (判断协议类型 === '木马') {
			const 解析结果 = 解析木马请求(chunk, yourUUID);
			if (解析结果?.hasError) throw new Error(解析结果.message || 'Invalid trojan request');
			const { port, hostname, rawClientData, isUDP } = 解析结果;
			if (isSpeedTestSite(hostname) && 反代上下文.代理类型 === null) {
				await 启用WS本地测速模式(serverSock, null, rawClientData);
				return;
			}
			if (isUDP) {
				isDnsQuery = true;
				木马UDP上下文.目标主机 = hostname;
				木马UDP上下文.目标端口 = port;
				if (木马UDP上下文.反代地址) return hug(当前块字节 || hog(chunk), serverSock, 木马UDP上下文, request);
				if (有效数据长度(rawClientData) > 0) return hug(rawClientData, serverSock, 木马UDP上下文, request);
				return;
			}
			await forwardataTCP(hostname, port, rawClientData, serverSock, null, remoteConnWrapper, yourUUID, request, 反代上下文, true, 当前块字节 || hog(chunk));
		} else {
			判断是否是木马 = false;
			当前块字节 = 当前块字节 || hog(chunk);
			const bytes = 当前块字节;
			const 解析结果 = 解析魏烈思请求(bytes, yourUUID);
			if (解析结果?.hasError) throw new Error(解析结果.message || 'Invalid 魏烈思 request');
			const { port, hostname, version, isUDP, rawClientData } = 解析结果;
			const respHeader = new Uint8Array([version, 0]);
			if (isSpeedTestSite(hostname) && 反代上下文.代理类型 === null) {
				await 启用WS本地测速模式(serverSock, respHeader, rawClientData);
				return;
			}
			if (isUDP) {
				if (port === 53) isDnsQuery = true;
				else throw new Error('UDP is not supported');
			}
			const rawData = rawClientData;
			if (isDnsQuery) {
				if (判断是否是木马) return hug(rawData, serverSock, 木马UDP上下文, request);
				return forwardataudp(rawData, serverSock, respHeader, request);
			}
			await forwardataTCP(hostname, port, rawData, serverSock, respHeader, remoteConnWrapper, yourUUID, request, 反代上下文);
		}
	};

	const 处理WS显式传输错误 = (err) => {
		if (WS显式传输失败) return;
		WS显式传输失败 = true;
		WS显式传输停止接收 = true;
		WS显式队列字节 = 0;
		WS显式队列条目 = 0;
		const msg = err?.message || `${err}`;
		if (msg.includes('Network connection lost') || msg.includes('ReadableStream is closed')) {
			log(`[WS转发] 连接结束: ${msg}`);
		} else {
			log(`[WS转发] 处理失败: ${msg}`);
		}
		上行写入队列.清空();
		释放远端写入器();
		失效远端连接();
		try { 木马UDP上下文.iq?.close() } catch (e) { }
		closeSocketQuietly(serverSock);
	};

	const 追加WS显式传输任务 = (任务) => {
		WS显式传输链 = WS显式传输链.then(任务).catch(处理WS显式传输错误);
		return WS显式传输链;
	};

	const 入队WS显式传输 = (data) => {
		if (WS显式传输停止接收 || WS显式传输失败) return;
		const chunkSize = Math.max(0, 有效数据长度(data));
		const nextBytes = WS显式队列字节 + chunkSize;
		const nextItems = WS显式队列条目 + 1;
		if (nextBytes > fado || nextItems > fahd) {
			处理WS显式传输错误(new Error(`[WS显式传输] 队列溢出: ${nextBytes}B/${nextItems}`));
			return;
		}
		WS显式队列字节 = nextBytes;
		WS显式队列条目 = nextItems;
		追加WS显式传输任务(async () => {
			WS显式队列字节 = Math.max(0, WS显式队列字节 - chunkSize);
			WS显式队列条目 = Math.max(0, WS显式队列条目 - 1);
			if (WS显式传输失败) return;
			await 处理WS入站数据(data);
		});
	};

	const 收尾WS显式传输 = () => {
		if (WS显式传输收尾已入队) return;
		WS显式传输收尾已入队 = true;
		WS显式传输停止接收 = true;
		追加WS显式传输任务(async () => {
			if (WS显式传输失败) return;
			await 上行写入队列.等待空();
			释放远端写入器();
			失效远端连接();
			try { 木马UDP上下文.iq?.close() } catch (e) { }
		});
	};

	serverSock.addEventListener('message', (event) => {
		入队WS显式传输(event.data);
	});
	serverSock.addEventListener('close', () => {
		closeSocketQuietly(serverSock);
		收尾WS显式传输();
	});
	serverSock.addEventListener('error', (err) => {
		处理WS显式传输错误(err);
	});

	// SS 模式下禁用 sec-websocket-protocol early-data，避免把子协议值（如 "binary"）误当作 base64 数据注入首包导致 AEAD 解密失败。
	if (!SS模式禁用EarlyData && earlyDataHeader) {
		try {
			const bytes = 解码WS早期数据(earlyDataHeader, yourUUID);
			if (bytes?.byteLength) 入队WS显式传输(bytes.buffer);
		} catch (error) {
			处理WS显式传输错误(error);
		}
	}

	return new Response(null, { status: 101, webSocket: clientSock, headers: { 'Sec-WebSocket-Extensions': '' } });
}
const cc = new TextDecoder();
function bob(bod) {
	const bos = String(bod || '').trim();
	if (!bos || bos.includes('/') || bos.includes('@') || bos.includes('://')) throw new Error('Error');
	let bog = '', boo = '';
	if (bos.startsWith('[')) {
		const bop = bos.match(/^(\[[^\]]+\]):(\d+)$/);
		if (!bop) throw new Error('Error');
		bog = bop[1];
		boo = bop[2];
	} else {
		const bot = bos.split(':');
		if (bot.length !== 2) throw new Error('Error');
		bog = bot[0];
		boo = bot[1];
	}
	const ca = Number(boo);
	if (!bog || !Number.isInteger(ca) || ca < 1 || ca > 65535) throw new Error('Error');
	return { hostname: bog, port: ca };
}
async function 连接木马反代(首包数据, TCP连接, 木马反代目标) {
	if (!木马反代目标) throw new Error('trojan fallback is not configured');
	const socket = TCP连接({ hostname: hap(木马反代目标.hostname), port: 木马反代目标.port });
	let writer = null;
	try {
		if (socket.opened) await socket.opened;
		if (有效数据长度(首包数据) > 0) {
			writer = socket.writable.getWriter();
			await writer.write(hog(首包数据));
		}
		return socket;
	} catch (error) {
		try { socket?.close?.() } catch (e) { }
		throw error;
	} finally {
		try { writer?.releaseLock() } catch (e) { }
	}
}

function 提取木马反代握手数据(首包数据, rawData) {
	const 首包 = hog(首包数据);
	const payload = hog(rawData);
	if (!payload.byteLength) return 首包;
	const 握手长度 = 首包.byteLength - payload.byteLength;
	if (握手长度 <= 0) return 首包;
	for (let i = 0; i < payload.byteLength; i++) {
		if (首包[握手长度 + i] !== payload[i]) return 首包;
	}
	return 首包.subarray(0, 握手长度);
}

async function ic(ie, ig, ii, il) {
	const io = hog(ie);
	if (!ii.iq) {
		const iv = iw(il);
		const socket = await 连接木马反代(io, iv, ii.反代地址);
		ii.iq = socket;
		socket.closed.catch(() => { }).finally(() => closeSocketQuietly(ig));
		connectStreams(socket, ig, null, null);
		return;
	}
	if (!io.byteLength) return;
	const writer = ii.iq.writable.getWriter();
	try { await writer.write(io) }
	finally { try { writer.releaseLock() } catch (e) { } }
}

function 解析木马请求(buffer, passwordPlainText) {
	const data = hog(buffer);
	const sha224Password = als(passwordPlainText);
	if (data.byteLength < 58) return { hasError: true, message: "invalid data" };
	let crLfIndex = 56;
	if (data[crLfIndex] !== 0x0d || data[crLfIndex + 1] !== 0x0a) return { hasError: true, message: "invalid header format" };
	for (let i = 0; i < crLfIndex; i++) {
		if (data[i] !== sha224Password.charCodeAt(i)) return { hasError: true, message: "invalid password" };
	}

	const socks5Index = crLfIndex + 2;
	if (data.byteLength < socks5Index + 6) return { hasError: true, message: "invalid S5 request data" };

	const cmd = data[socks5Index];
	if (cmd !== 1 && cmd !== 3) return { hasError: true, message: "unsupported command, only TCP/UDP is allowed" };
	const isUDP = cmd === 3;

	const atype = data[socks5Index + 1];
	let addressLength = 0;
	let addressIndex = socks5Index + 2;
	let address = "";
	switch (atype) {
		case 1: // IPv4
			addressLength = 4;
			if (data.byteLength < addressIndex + addressLength + 4) return { hasError: true, message: "invalid S5 request data" };
			address = `${data[addressIndex]}.${data[addressIndex + 1]}.${data[addressIndex + 2]}.${data[addressIndex + 3]}`;
			break;
		case 3: // Domain
			if (data.byteLength < addressIndex + 1) return { hasError: true, message: "invalid S5 request data" };
			addressLength = data[addressIndex];
			addressIndex += 1;
			if (data.byteLength < addressIndex + addressLength + 4) return { hasError: true, message: "invalid S5 request data" };
			address = cc.decode(data.subarray(addressIndex, addressIndex + addressLength));
			break;
		case 4: // IPv6
			addressLength = 16;
			if (data.byteLength < addressIndex + addressLength + 4) return { hasError: true, message: "invalid S5 request data" };
			const ipv6 = [];
			for (let i = 0; i < 8; i++) {
				const partIndex = addressIndex + i * 2;
				ipv6.push(((data[partIndex] << 8) | data[partIndex + 1]).toString(16));
			}
			address = ipv6.join(":");
			break;
		default:
			return { hasError: true, message: `invalid addressType is ${atype}` };
	}

	if (!address) {
		return { hasError: true, message: `address is empty, addressType is ${atype}` };
	}

	const portIndex = addressIndex + addressLength;
	if (data.byteLength < portIndex + 4) return { hasError: true, message: "invalid S5 request data" };
	const portRemote = (data[portIndex] << 8) | data[portIndex + 1];

	return {
		hasError: false,
		addressType: atype,
		port: portRemote,
		hostname: address,
		isUDP,
		rawClientData: data.subarray(portIndex + 4)
	};
}

const UUID字节缓存 = new Map();
const 魏烈思文本解码器 = new TextDecoder();

function 读取十六进制半字节(code) {
	if (code >= 48 && code <= 57) return code - 48;
	code |= 32;
	if (code >= 97 && code <= 102) return code - 87;
	return -1;
}

function 获取UUID字节(uuid) {
	const key = String(uuid || '');
	let cached = UUID字节缓存.get(key);
	if (cached) return cached;

	const clean = key.replace(/-/g, '');
	if (clean.length !== 32) return null;

	const bytes = new Uint8Array(16);
	for (let i = 0; i < 16; i++) {
		const high = 读取十六进制半字节(clean.charCodeAt(i * 2));
		const low = 读取十六进制半字节(clean.charCodeAt(i * 2 + 1));
		if (high < 0 || low < 0) return null;
		bytes[i] = (high << 4) | low;
	}

	if (UUID字节缓存.size >= 32) UUID字节缓存.clear();
	UUID字节缓存.set(key, bytes);
	return bytes;
}

function UUID字节匹配(data, offset, uuid) {
	const expected = 获取UUID字节(uuid);
	if (!expected || data.byteLength < offset + 16) return false;
	for (let i = 0; i < 16; i++) {
		if (data[offset + i] !== expected[i]) return false;
	}
	return true;
}

function 解析魏烈思请求(chunk, token) {
	const data = hog(chunk);
	const length = data.byteLength;
	if (length < 24) return { hasError: true, message: 'Invalid data' };
	const version = data[0];
	if (!UUID字节匹配(data, 1, token)) return { hasError: true, message: 'Invalid uuid' };

	const optLen = data[17];
	const cmdIndex = 18 + optLen;
	if (length < cmdIndex + 4) return { hasError: true, message: 'Invalid data' };

	const cmd = data[cmdIndex];
	let isUDP = false;
	if (cmd === 1) { } else if (cmd === 2) { isUDP = true } else { return { hasError: true, message: 'Invalid command' } }

	const portIdx = cmdIndex + 1;
	const port = (data[portIdx] << 8) | data[portIdx + 1];
	let addrValIdx = portIdx + 3, addrLen = 0, hostname = '';
	const addressType = data[portIdx + 2];
	switch (addressType) {
		case 1:
			addrLen = 4;
			if (length < addrValIdx + addrLen) return { hasError: true, message: 'Invalid IPv4 address length' };
			hostname = `${data[addrValIdx]}.${data[addrValIdx + 1]}.${data[addrValIdx + 2]}.${data[addrValIdx + 3]}`;
			break;
		case 2:
			if (length < addrValIdx + 1) return { hasError: true, message: 'Invalid domain length' };
			addrLen = data[addrValIdx];
			addrValIdx += 1;
			if (length < addrValIdx + addrLen) return { hasError: true, message: 'Invalid domain data' };
			hostname = 魏烈思文本解码器.decode(data.subarray(addrValIdx, addrValIdx + addrLen));
			break;
		case 3:
			addrLen = 16;
			if (length < addrValIdx + addrLen) return { hasError: true, message: 'Invalid IPv6 address length' };
			const ipv6 = [];
			for (let i = 0; i < 8; i++) {
				const base = addrValIdx + i * 2;
				ipv6.push(((data[base] << 8) | data[base + 1]).toString(16));
			}
			hostname = ipv6.join(':');
			break;
		default:
			return { hasError: true, message: `Invalid address type: ${addressType}` };
	}
	if (!hostname) return { hasError: true, message: `Invalid address: ${addressType}` };
	const rawIndex = addrValIdx + addrLen;
	return { hasError: false, addressType, port, hostname, isUDP, rawClientData: data.subarray(rawIndex), version };
}

const SS支持加密配置 = {
	'aes-128-gcm': { method: 'aes-128-gcm', keyLen: 16, saltLen: 16, maxChunk: 0x3fff, aesLength: 128 },
	'aes-256-gcm': { method: 'aes-256-gcm', keyLen: 32, saltLen: 32, maxChunk: 0x3fff, aesLength: 256 },
};

const SSAEAD标签长度 = 16, SSNonce长度 = 12;
const SS子密钥信息 = new TextEncoder().encode('ss-subkey');
const SS文本编码器 = new TextEncoder(), SS文本解码器 = new TextDecoder(), SS主密钥缓存 = new Map();

function hog(hop) {
	if (hop instanceof Uint8Array) return hop;
	if (hop instanceof ArrayBuffer) return new Uint8Array(hop);
	if (ArrayBuffer.isView(hop)) return new Uint8Array(hop.buffer, hop.byteOffset, hop.byteLength);
	return new Uint8Array(hop || 0);
}
function hot(...hoy) {
	if (!hoy || hoy.length === 0) return new Uint8Array(0);
	const hrt = hoy.map(hog);
	const hua = hrt.reduce((sum, c) => sum + c.byteLength, 0);
	const hub = new Uint8Array(hua);
	let hud = 0;
	for (const c of hrt) { hub.set(c, hud); hud += c.byteLength }
	return hub;
}
async function hug(hum, hun, hus, hut) {
	const ia = hog(hum);
	if (hus?.反代地址) return ic(ia, hun, hus, hut);
	const 缓存块 = hus?.缓存 instanceof Uint8Array ? hus.缓存 : new Uint8Array(0);
	const input = 缓存块.byteLength ? hot(缓存块, ia) : ia;
	let cursor = 0;

	while (cursor < input.byteLength) {
		const packetStart = cursor;
		const atype = input[cursor];
		let addrCursor = cursor + 1;
		let addrLen = 0;
		if (atype === 1) addrLen = 4;
		else if (atype === 4) addrLen = 16;
		else if (atype === 3) {
			if (input.byteLength < addrCursor + 1) break;
			addrLen = 1 + input[addrCursor];
		} else throw new Error(`invalid trojan udp addressType: ${atype}`);

		const portCursor = addrCursor + addrLen;
		if (input.byteLength < portCursor + 6) break;

		const port = (input[portCursor] << 8) | input[portCursor + 1];
		const payloadLength = (input[portCursor + 2] << 8) | input[portCursor + 3];
		if (input[portCursor + 4] !== 0x0d || input[portCursor + 5] !== 0x0a) throw new Error('invalid trojan udp delimiter');

		const payloadStart = portCursor + 6;
		const payloadEnd = payloadStart + payloadLength;
		if (input.byteLength < payloadEnd) break;

		const 地址端口头 = input.slice(packetStart, portCursor + 2);
		const payload = input.slice(payloadStart, payloadEnd);
		cursor = payloadEnd;

		if (port !== 53) throw new Error('UDP is not supported');
		if (!payload.byteLength) continue;

		let tcpDNS查询 = payload;
		if (payload.byteLength < 2 || ((payload[0] << 8) | payload[1]) !== payload.byteLength - 2) {
			tcpDNS查询 = new Uint8Array(payload.byteLength + 2);
			tcpDNS查询[0] = (payload.byteLength >>> 8) & 0xff;
			tcpDNS查询[1] = payload.byteLength & 0xff;
			tcpDNS查询.set(payload, 2);
		}

		const dns响应上下文 = { 缓存: new Uint8Array(0) };
		await forwardataudp(tcpDNS查询, hun, null, hut, (dnsRespChunk) => {
			const 当前响应块 = hog(dnsRespChunk);
			const 响应输入 = dns响应上下文.缓存.byteLength ? hot(dns响应上下文.缓存, 当前响应块) : 当前响应块;
			const 响应帧列表 = [];
			let responseCursor = 0;
			while (responseCursor + 2 <= 响应输入.byteLength) {
				const dnsLen = (响应输入[responseCursor] << 8) | 响应输入[responseCursor + 1];
				const dnsStart = responseCursor + 2;
				const dnsEnd = dnsStart + dnsLen;
				if (dnsEnd > 响应输入.byteLength) break;
				const dnsPayload = 响应输入.slice(dnsStart, dnsEnd);
				const frame = new Uint8Array(地址端口头.byteLength + 4 + dnsPayload.byteLength);
				frame.set(地址端口头, 0);
				frame[地址端口头.byteLength] = (dnsPayload.byteLength >>> 8) & 0xff;
				frame[地址端口头.byteLength + 1] = dnsPayload.byteLength & 0xff;
				frame[地址端口头.byteLength + 2] = 0x0d;
				frame[地址端口头.byteLength + 3] = 0x0a;
				frame.set(dnsPayload, 地址端口头.byteLength + 4);
				响应帧列表.push(frame);
				responseCursor = dnsEnd;
			}
			dns响应上下文.缓存 = 响应输入.slice(responseCursor);
			return 响应帧列表.length ? 响应帧列表 : new Uint8Array(0);
		});
	}

	if (hus) hus.缓存 = input.slice(cursor);
}

function SS递增Nonce计数器(counter) {
	for (let i = 0; i < counter.length; i++) { counter[i] = (counter[i] + 1) & 0xff; if (counter[i] !== 0) return }
}

async function SS派生主密钥(passwordText, keyLen) {
	const cacheKey = `${keyLen}:${passwordText}`;
	if (SS主密钥缓存.has(cacheKey)) return SS主密钥缓存.get(cacheKey);
	const deriveTask = (async () => {
		const pwBytes = SS文本编码器.encode(passwordText || '');
		let prev = new Uint8Array(0), result = new Uint8Array(0);
		while (result.byteLength < keyLen) {
			const input = new Uint8Array(prev.byteLength + pwBytes.byteLength);
			input.set(prev, 0); input.set(pwBytes, prev.byteLength);
			prev = new Uint8Array(await crypto.subtle.digest('MD5', input));
			result = hot(result, prev);
		}
		return result.slice(0, keyLen);
	})();
	SS主密钥缓存.set(cacheKey, deriveTask);
	try { return await deriveTask }
	catch (error) { SS主密钥缓存.delete(cacheKey); throw error }
}

async function SS派生会话密钥(config, masterKey, salt, usages) {
	const hmacOpts = { name: 'HMAC', hash: 'SHA-1' };
	const saltHmacKey = await crypto.subtle.importKey('raw', salt, hmacOpts, false, ['sign']);
	const prk = new Uint8Array(await crypto.subtle.sign('HMAC', saltHmacKey, masterKey));
	const prkHmacKey = await crypto.subtle.importKey('raw', prk, hmacOpts, false, ['sign']);
	const subKey = new Uint8Array(config.keyLen);
	let prev = new Uint8Array(0), written = 0, counter = 1;
	while (written < config.keyLen) {
		const input = hot(prev, SS子密钥信息, new Uint8Array([counter]));
		prev = new Uint8Array(await crypto.subtle.sign('HMAC', prkHmacKey, input));
		const copyLen = Math.min(prev.byteLength, config.keyLen - written);
		subKey.set(prev.subarray(0, copyLen), written);
		written += copyLen; counter += 1;
	}
	return crypto.subtle.importKey('raw', subKey, { name: 'AES-GCM', length: config.aesLength }, false, usages);
}

async function SSAEAD加密(cryptoKey, nonceCounter, plaintext) {
	const iv = nonceCounter.slice();
	const ct = await crypto.subtle.encrypt({ name: 'AES-GCM', iv, tagLength: 128 }, cryptoKey, plaintext);
	SS递增Nonce计数器(nonceCounter);
	return new Uint8Array(ct);
}

async function SSAEAD解密(cryptoKey, nonceCounter, ciphertext) {
	const iv = nonceCounter.slice();
	const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv, tagLength: 128 }, cryptoKey, ciphertext);
	SS递增Nonce计数器(nonceCounter);
	return new Uint8Array(pt);
}

async function forwardataTCP(host, portNum, rawData, ws, respHeader, remoteConnWrapper, yourUUID, request = null, 反代上下文 = {}, 允许木马反代 = false, 木马反代首包数据 = null, 仅建立连接 = false) {
	const ctx反代IP = 反代上下文.反代IP || '';
	const ctx代理类型 = 反代上下文.代理类型 !== undefined ? 反代上下文.代理类型 : null;
	const ctx代理全局 = 反代上下文.代理全局 !== undefined ? 反代上下文.代理全局 : false;
	const ctx代理参数 = 反代上下文.代理参数 || {};
	const ctx反代兜底 = 反代上下文.反代兜底 !== undefined ? 反代上下文.反代兜底 : true;
	let 反代数组索引 = 0;
	log(`[TCP转发] 目标: ${host}:${portNum} | 反代IP: ${ctx反代IP} | 反代兜底: ${ctx反代兜底 ? '是' : '否'} | 反代类型: ${ctx代理类型 || 'proxyip'} | 全局: ${ctx代理全局 ? '是' : '否'}`);
	const 连接超时毫秒 = 1000;
	let 已通过代理发送首包 = false;
	const TCP连接 = iw(request);
	const 使用木马反代 = 允许木马反代 && (反代上下文.木马反代地址 || null);
	const 木马反代目标 = 使用木马反代 ? 反代上下文.木马反代地址 : null;
	const 木马反代握手数据 = 使用木马反代 ? 提取木马反代握手数据(木马反代首包数据, rawData) : null;
	let 待发送响应头 = respHeader;
	const 取出响应头 = () => {
		const header = 待发送响应头;
		待发送响应头 = null;
		return header;
	};
	if (!Number.isInteger(remoteConnWrapper.generation)) remoteConnWrapper.generation = 0;

	const 安装当前连接 = async (socket, generation, downlinkDrain, retryFunc = null) => {
		try { await downlinkDrain } catch (e) {
			if (remoteConnWrapper.downlinkDrain === downlinkDrain) remoteConnWrapper.downlinkDrain = Promise.resolve();
			try { socket?.close?.() } catch (_) { }
			if (remoteConnWrapper.generation === generation) closeSocketQuietly(ws);
			throw e;
		}
		if (remoteConnWrapper.downlinkDrain === downlinkDrain) remoteConnWrapper.downlinkDrain = Promise.resolve();
		const 连接仍有效 = () => remoteConnWrapper.generation === generation && remoteConnWrapper.socket === socket;
		if (remoteConnWrapper.generation !== generation || ws.readyState !== WebSocket.OPEN) {
			try { socket?.close?.() } catch (e) { }
			if (remoteConnWrapper.generation === generation) remoteConnWrapper.socket = null;
			throw new Error('connection superseded or client closed');
		}
		remoteConnWrapper.socket = socket;
		if (仅建立连接) return socket;
		connectStreams(socket, ws, 取出响应头, retryFunc, 连接仍有效, remoteConnWrapper).catch(err => {
			if (!连接仍有效()) return;
			log(`[TCP下行] 处理失败: ${err?.message || err}`);
			try { socket?.close?.() } catch (e) { }
			closeSocketQuietly(ws);
		});
		return true;
	};

	async function 等待连接建立(remoteSock, timeoutMs = 连接超时毫秒) {
		await Promise.race([
			remoteSock.opened,
			new Promise((_, reject) => setTimeout(() => reject(new Error('连接超时')), timeoutMs))
		]);
	}

	async function 打开TCP连接(address, port) {
		const remoteSock = TCP连接({ hostname: address, port });
		try {
			await 等待连接建立(remoteSock);
			return remoteSock;
		} catch (err) {
			try { remoteSock?.close?.() } catch (e) { }
			throw err;
		}
	}

	async function 写入首包(remoteSock, data) {
		if (有效数据长度(data) <= 0) return;
		const writer = remoteSock.writable.getWriter();
		try { await writer.write(hog(data)) }
		finally { try { writer.releaseLock() } catch (e) { } }
	}

	async function 并发打开候选连接(候选列表) {
		if (候选列表.length === 1) {
			const 候选 = 候选列表[0];
			return { socket: await 打开TCP连接(候选.hostname, 候选.port), candidate: 候选 };
		}
		const attempts = 候选列表.map(候选 => 打开TCP连接(候选.hostname, 候选.port).then(socket => ({ socket, candidate: 候选 })));
		let winner = null;
		try {
			winner = await Promise.any(attempts);
			return winner;
		} finally {
			if (winner) {
				for (const attempt of attempts) {
					attempt.then(({ socket }) => {
						if (socket !== winner.socket) {
							try { socket?.close?.() } catch (e) { }
						}
					}).catch(() => { });
				}
			}
		}
	}

	async function 构建预加载竞速候选列表(address, port) {
		if (!fang || hay(address)) return null;
		log(`[TCP直连] 预加载竞速拨号开启，开始并发查询 ${address} 的 A/AAAA 记录`);
		const [aRecords, aaaaRecords] = await Promise.all([
			ado(address, 'A'),
			ado(address, 'AAAA')
		]);
		const ipv4List = [...new Set(aRecords.flatMap(r => {
			const data = r.data;
			return r.type === 1 && typeof data === 'string' && hin(data) ? [data] : [];
		}))];
		const ipv6List = [...new Set(aaaaRecords.flatMap(r => {
			const data = r.data;
			return r.type === 28 && typeof data === 'string' && hay(data) ? [data] : [];
		}))];
		const 拨号上限 = Math.max(1, fall | 0);
		const ipList = ipv4List.length >= 拨号上限
			? ipv4List.slice(0, 拨号上限)
			: ipv4List.concat(ipv6List.slice(0, 拨号上限 - ipv4List.length));
		const 使用记录类型 = ipv4List.length > 0
			? (ipList.length > ipv4List.length ? 'A+AAAA' : 'A')
			: 'AAAA';
		if (ipList.length === 0) {
			log(`[TCP直连] ${address} 的 A/AAAA 未获得可用解析结果，预加载竞速不可用，回退到原始 hostname 直连。`);
			return null;
		}
		const 选中IP列表 = ipList;
		log(`[TCP直连] ${address} A记录:${ipv4List.length} AAAA记录:${ipv6List.length}，使用${使用记录类型}记录，竞速拨号 ${选中IP列表.length}/${拨号上限}: ${选中IP列表.join(', ')}`);
		return 选中IP列表.map((hostname, attempt) => ({ hostname, port, attempt, resolvedFrom: address }));
	}

	async function connectDirect(address, port, data = null, 启用预加载 = false) {
		const 预加载候选列表 = 启用预加载 ? await 构建预加载竞速候选列表(address, port) : null;
		const 候选列表 = 预加载候选列表 || Array.from({ length: fall }, (_, attempt) => ({ hostname: address, port, attempt }));
		log(预加载候选列表
			? `[TCP直连] 并发尝试 ${候选列表.length} 路: ${候选列表.map(候选 => `${候选.hostname}:${候选.port}`).join(', ')}`
			: `[TCP直连] 并发尝试 ${候选列表.length} 路: ${address}:${port}`);
		let socket = null;
		try {
			const 连接结果 = await 并发打开候选连接(候选列表);
			socket = 连接结果.socket;
			if (预加载候选列表) {
				const winner = 连接结果.candidate;
				log(`[TCP直连] 预加载竞速结果: ${winner.hostname}:${winner.port} 胜出，源域名: ${winner.resolvedFrom || address}`);
			}
			await 写入首包(socket, data);
			return socket;
		} catch (err) {
			try { socket?.close?.() } catch (e) { }
			if (预加载候选列表) log(`[TCP直连] 预加载竞速失败: ${err.message || err}`);
			throw err;
		}
	}

	async function connectProxyIP(address, port, data = null, 所有反代数组 = null, 启用反代失败兜底 = true) {
		if (所有反代数组 && 所有反代数组.length > 0) {
			const 实际并发数 = Math.max(1, Math.floor(Number(fame) || 1));
			for (let i = 0; i < 所有反代数组.length; i += 实际并发数) {
				const 候选列表 = [];
				for (let j = 0; j < 实际并发数 && i + j < 所有反代数组.length; j++) {
					const 索引 = (反代数组索引 + i + j) % 所有反代数组.length;
					const [反代地址, 反代端口] = 所有反代数组[索引];
					候选列表.push({ hostname: 反代地址, port: 反代端口, index: 索引 });
				}
				let socket = null, candidate = null;
				try {
					log(`[反代连接] 并发尝试 ${候选列表.length} 路: ${候选列表.map(候选 => `${候选.hostname}:${候选.port}`).join(', ')}`);
					const 连接结果 = await 并发打开候选连接(候选列表);
					socket = 连接结果.socket;
					candidate = 连接结果.candidate;
					await 写入首包(socket, data);
					log(`[反代连接] 成功连接到: ${candidate.hostname}:${candidate.port} (索引: ${candidate.index})`);
					反代数组索引 = candidate.index;
					return socket;
				} catch (err) {
					try { socket?.close?.() } catch (e) { }
					log(`[反代连接] 本批连接失败: ${err.message || err}`);
				}
			}
		}

		if (启用反代失败兜底) return connectDirect(address, port, data, false);
		else {
			throw new Error('[反代连接] 所有反代连接失败，且未启用反代兜底，连接终止。');
		}
	}

	async function connecttoPry(允许发送首包 = true) {
		if (remoteConnWrapper.connectingPromise) {
			await remoteConnWrapper.connectingPromise;
			return;
		}
		const { generation: 当前连接世代, downlinkDrain } = 开始TCP连接世代(remoteConnWrapper);

		let 本次发送首包 = false, 本次首包数据 = null;
		if (使用木马反代) {
			if (允许发送首包 && !已通过代理发送首包 && 有效数据长度(木马反代首包数据) > 0) {
				本次首包数据 = 木马反代首包数据;
				本次发送首包 = 有效数据长度(rawData) > 0;
			} else {
				本次首包数据 = 木马反代握手数据;
			}
		} else {
			本次发送首包 = 允许发送首包 && !已通过代理发送首包 && 有效数据长度(rawData) > 0;
			本次首包数据 = 本次发送首包 ? rawData : null;
		}

		const 当前连接任务 = (async () => {
			let newSocket = null;
			try {
				if (使用木马反代) {
					log(`[木马反代] 代理到: ${host}:${portNum}`);
					newSocket = await 连接木马反代(本次首包数据, TCP连接, 木马反代目标);
				} else if (ctx代理类型 === 'socks5') {
					log(`[SOCKS5代理] 代理到: ${host}:${portNum}`);
					newSocket = await socks5Connect(host, portNum, 本次首包数据, TCP连接, ctx代理参数);
				} else if (ctx代理类型 === 'http') {
					log(`[HTTP代理] 代理到: ${host}:${portNum}`);
					newSocket = await httpConnect(host, portNum, 本次首包数据, false, TCP连接, ctx代理参数);
				} else if (ctx代理类型 === 'https') {
					log(`[HTTPS代理] 代理到: ${host}:${portNum}`);
					newSocket = hay(ctx代理参数.hostname)
						? await httpsConnect(host, portNum, 本次首包数据, TCP连接, ctx代理参数)
						: await httpConnect(host, portNum, 本次首包数据, true, TCP连接, ctx代理参数);
				} else if (ctx代理类型 === 'turn') {
					log(`[TURN代理] 代理到: ${host}:${portNum}`);
					newSocket = await turnConnect(ctx代理参数, host, portNum, TCP连接);
					if (有效数据长度(本次首包数据) > 0) {
						const writer = newSocket.writable.getWriter();
						try { await writer.write(hog(本次首包数据)) }
						finally { try { writer.releaseLock() } catch (e) { } }
					}
				} else if (ctx代理类型 === 'sstp') {
					log(`[SSTP代理] 代理到: ${host}:${portNum}`);
					newSocket = await sstpConnect(ctx代理参数, host, portNum, TCP连接);
					if (有效数据长度(本次首包数据) > 0) {
						const writer = newSocket.writable.getWriter();
						try { await writer.write(hog(本次首包数据)) }
						finally { try { writer.releaseLock() } catch (e) { } }
					}
				} else {
					log(`[反代连接] 代理到: ${host}:${portNum}`);
					const 所有反代数组 = await al(ctx反代IP, host, yourUUID);
					newSocket = await connectProxyIP(`${fas[0]}.tp1.${fas[2]}.xyz`, 1, 本次首包数据, 所有反代数组, ctx反代兜底);
				}
				await 安装当前连接(newSocket, 当前连接世代, downlinkDrain);
				if (本次发送首包) 已通过代理发送首包 = true;
			} catch (err) {
				try { newSocket?.close?.() } catch (e) { }
				if (remoteConnWrapper.generation === 当前连接世代) {
					remoteConnWrapper.socket = null;
					closeSocketQuietly(ws);
					throw err;
				}
			}
		})();

		remoteConnWrapper.connectingPromise = 当前连接任务;
		try {
			await 当前连接任务;
		} finally {
			if (remoteConnWrapper.connectingPromise === 当前连接任务) {
				remoteConnWrapper.connectingPromise = null;
			}
		}
	}
	remoteConnWrapper.retryConnect = async () => connecttoPry(!已通过代理发送首包);

	if (ctx代理类型 && (ctx代理全局 || fur.some(p => new RegExp(`^${p.replace(/\*/g, '.*')}$`, 'i').test(host)))) {
		log(`Log`);
		try {
			await connecttoPry();
			if (仅建立连接) return remoteConnWrapper.socket;
		} catch (err) {
			log(`[TCP转发] SOCKS5/HTTP/HTTPS/TURN/SSTP 代理连接失败: ${err.message}`);
			throw err;
		}
	} else {
		let 直连世代 = remoteConnWrapper.generation;
		try {
			log(`[TCP转发] 尝试直连到: ${host}:${portNum}`);
			const 世代连接 = 开始TCP连接世代(remoteConnWrapper);
			直连世代 = 世代连接.generation;
			const initialSocket = await connectDirect(host, portNum, rawData, true);
			await 安装当前连接(initialSocket, 直连世代, 世代连接.downlinkDrain, async () => {
				if (remoteConnWrapper.generation !== 直连世代 || remoteConnWrapper.socket !== initialSocket) return;
				await connecttoPry();
			});
			if (仅建立连接) return initialSocket;
		} catch (err) {
			log(`[TCP转发] 直连 ${host}:${portNum} 失败: ${err.message}`);
			if (remoteConnWrapper.generation !== 直连世代) throw err;
			if (err instanceof Error && err.name === '预加载解析为空') {
				closeSocketQuietly(ws);
				throw err;
			}
			if (ws.readyState !== WebSocket.OPEN) throw err;
			await connecttoPry();
			if (仅建立连接) return remoteConnWrapper.socket;
		}
	}
}

async function forwardataudp(udpChunk, webSocket, respHeader, request, 响应封装器 = null) {
	const 请求数据 = hog(udpChunk);
	const 请求字节数 = 请求数据.byteLength;
	log(`[UDP转发] 收到 DNS 请求: ${请求字节数}B -> 8.8.4.4:53`);
	try {
		const TCP连接 = iw(request);
		const tcpSocket = TCP连接({ hostname: '8.8.4.4', port: 53 });
		let 魏烈思Header = respHeader;
		const writer = tcpSocket.writable.getWriter();
		await writer.write(请求数据);
		log(`[UDP转发] DNS 请求已写入上游: ${请求字节数}B`);
		writer.releaseLock();
		await tcpSocket.readable.pipeTo(new WritableStream({
			async write(chunk) {
				const 原始响应 = hog(chunk);
				log(`[UDP转发] 收到 DNS 响应: ${原始响应.byteLength}B`);
				const 封装结果 = 响应封装器 ? await 响应封装器(原始响应) : 原始响应;
				const 发送片段列表 = Array.isArray(封装结果) ? 封装结果 : [封装结果];
				if (!发送片段列表.length) return;
				if (webSocket.readyState !== WebSocket.OPEN) return;
				for (const fragment of 发送片段列表) {
					const 转发响应 = hog(fragment);
					if (!转发响应.byteLength) continue;
					if (魏烈思Header) {
						const response = new Uint8Array(魏烈思Header.length + 转发响应.byteLength);
						response.set(魏烈思Header, 0);
						response.set(转发响应, 魏烈思Header.length);
						await WebSocket发送并等待(webSocket, response.buffer);
						魏烈思Header = null;
					} else {
						await WebSocket发送并等待(webSocket, 转发响应);
					}
				}
			},
		}));
	} catch (error) {
		log(`[UDP转发] DNS 转发失败: ${error?.message || error}`);
	}
}

function closeSocketQuietly(socket) {
	try {
		if (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CLOSING) {
			socket.close();
		}
	} catch (error) { }
}

function formatIdentifier(arr, offset = 0) {
	const hex = [...arr.slice(offset, offset + 16)].map(b => b.toString(16).padStart(2, '0')).join('');
	return `${hex.substring(0, 8)}-${hex.substring(8, 12)}-${hex.substring(12, 16)}-${hex.substring(16, 20)}-${hex.substring(20)}`;
}

async function WebSocket发送并等待(webSocket, payload) {
	const sendResult = webSocket.send(payload);
	if (sendResult && typeof sendResult.then === 'function') await sendResult;
}

function 创建Grain收纳器(容量, 复制合包结果 = false) {
	let 队列 = [];
	let 头 = 0;
	let 字节数 = 0;
	let 合包缓冲 = null;

	const 为空 = () => 头 >= 队列.length;
	const 压缩 = () => {
		if (头 > 32 && 头 * 2 >= 队列.length) {
			队列 = 队列.slice(头);
			头 = 0;
		}
	};
	const 取出 = () => {
		if (为空()) return null;
		const item = 队列[头];
		队列[头++] = undefined;
		字节数 -= item.chunk.byteLength;
		压缩();
		return item;
	};

	return {
		get 字节数() { return 字节数 },
		get 条目数() { return 队列.length - 头 },
		get 为空() { return 为空() },
		清空(处理项目 = null) {
			if (处理项目) {
				for (let i = 头; i < 队列.length; i++) {
					if (队列[i]) 处理项目(队列[i]);
				}
			}
			队列 = [];
			头 = 0;
			字节数 = 0;
		},
		收纳(item) {
			if (!item?.chunk?.byteLength) return false;
			队列.push(item);
			字节数 += item.chunk.byteLength;
			return true;
		},
		合包() {
			const first = 取出();
			if (!first) return null;
			const items = [first];
			if (为空() || first.chunk.byteLength >= 容量) return { chunk: first.chunk, items };

			let totalBytes = first.chunk.byteLength;
			let end = 头;
			while (end < 队列.length) {
				const nextBytes = totalBytes + 队列[end].chunk.byteLength;
				if (nextBytes > 容量) break;
				totalBytes = nextBytes;
				end++;
			}
			if (end === 头) return { chunk: first.chunk, items };

			const output = (合包缓冲 ||= new Uint8Array(容量));
			output.set(first.chunk, 0);
			let offset = first.chunk.byteLength;
			while (头 < end) {
				const next = 队列[头];
				队列[头++] = undefined;
				字节数 -= next.chunk.byteLength;
				items.push(next);
				output.set(next.chunk, offset);
				offset += next.chunk.byteLength;
			}
			压缩();
			const bundled = output.subarray(0, totalBytes);
			return { chunk: 复制合包结果 ? bundled.slice() : bundled, items };
		}
	};
}

function 创建上行Grain合包流(目标字节 = fade) {
	const identity = typeof IdentityTransformStream !== 'undefined'
		? new IdentityTransformStream()
		: new TransformStream();
	const writer = identity.writable.getWriter();
	const 缓冲 = new Uint8Array(目标字节);
	let 缓冲长度 = 0;
	let 定时器 = null;
	let 在途写 = null;
	let 冲刷链 = Promise.resolve();

	const 清理定时器 = () => {
		if (定时器) {
			clearTimeout(定时器);
			定时器 = null;
		}
	};

	const 串行写 = async (chunk) => {
		if (在途写) await 在途写;
		在途写 = writer.write(chunk);
		try { await 在途写 } finally { 在途写 = null; }
	};

	const 冲刷 = async () => {
		if (缓冲长度) {
			const chunk = 缓冲.slice(0, 缓冲长度);
			缓冲长度 = 0;
			await 串行写(chunk);
		}
	};

	const 排队冲刷 = () => {
		冲刷链 = 冲刷链.then(() => 冲刷()).catch(() => { });
	};

	const 启动定时器 = () => {
		if (定时器) return;
		定时器 = setTimeout(() => {
			定时器 = null;
			排队冲刷();
		}, 1);
	};

	return {
		readable: identity.readable,
		写入: async (chunk) => {
			const data = hog(chunk);
			if (!data.byteLength) return;
			if (data.byteLength >= 目标字节) {
				清理定时器();
				if (缓冲长度) await 冲刷();
				await 串行写(data);
				return;
			}
			if (缓冲长度 + data.byteLength >= 目标字节) {
				const output = new Uint8Array(缓冲长度 + data.byteLength);
				output.set(缓冲.subarray(0, 缓冲长度), 0);
				output.set(data, 缓冲长度);
				缓冲长度 = 0;
				清理定时器();
				await 串行写(output);
			} else {
				缓冲.set(data, 缓冲长度);
				缓冲长度 += data.byteLength;
				启动定时器();
			}
		},
		结束: async () => {
			清理定时器();
			try {
				await 冲刷链;
				await 冲刷();
				await writer.close();
			} finally {
				try { writer.releaseLock() } catch (e) { }
			}
		}
	};
}

function 创建上行写入队列({ 获取写入器, 获取连接任务 = null, 释放写入器, 重试连接, 关闭连接, 名称 = '上行队列' }) {
	const grain = 创建Grain收纳器(fade);
	let draining = false;
	let closed = false;
	let idleResolvers = [];
	let activeCompletions = null;

	const settleCompletions = (completions, err = null) => {
		if (!completions) return;
		for (const completion of completions) {
			if (err) completion.reject(err);
			else completion.resolve();
		}
	};

	const resolveIdle = () => {
		if (grain.字节数 || draining || !idleResolvers.length) return;
		const resolvers = idleResolvers;
		idleResolvers = [];
		for (const resolve of resolvers) resolve();
	};

	const clear = (err = null) => {
		const closeErr = err || (closed ? new Error(`${名称}: queue closed`) : null);
		if (closeErr) {
			grain.清空(item => settleCompletions(item.completions, closeErr));
			settleCompletions(activeCompletions, closeErr);
			activeCompletions = null;
		} else grain.清空();
		resolveIdle();
	};

	const bundle = () => {
		const packed = grain.合包();
		if (!packed) return null;
		let allowRetry = true;
		let completions = null;
		for (const item of packed.items) {
			allowRetry = allowRetry && item.allowRetry;
			if (item.completions) completions = completions ? completions.concat(item.completions) : item.completions;
		}
		return { chunk: packed.chunk, allowRetry, completions };
	};

	const 等待可用写入器 = async () => {
		let writer = 获取写入器();
		if (writer) return writer;
		const connectionTask = 获取连接任务?.();
		if (connectionTask) await connectionTask;
		return 获取写入器();
	};

	const drain = async () => {
		if (draining || closed) return;
		draining = true;
		try {
			for (; ;) {
				if (closed) break;
				const item = bundle();
				if (!item) break;
				const completions = item.completions || null;
				activeCompletions = completions;
				try {
					let writer = await 等待可用写入器();
					if (closed) break;
					if (!writer) throw new Error(`${名称}: remote writer unavailable`);
					try {
						await writer.write(item.chunk);
					} catch (err) {
						释放写入器?.();
						if (closed) break;
						if (!item.allowRetry || typeof 重试连接 !== 'function') throw err;
						await 重试连接();
						if (closed) break;
						writer = 获取写入器();
						if (!writer) throw err;
						await writer.write(item.chunk);
					}
					settleCompletions(completions);
				} catch (err) {
					settleCompletions(completions, err);
					throw err;
				} finally {
					if (activeCompletions === completions) activeCompletions = null;
				}
			}
		} catch (err) {
			closed = true;
			clear(err);
			log(`[${名称}] 写入失败: ${err?.message || err}`);
			try { 关闭连接?.(err) } catch (_) { }
		} finally {
			draining = false;
			if (!closed && !grain.为空) drain();
			else resolveIdle();
		}
	};

	const enqueue = (data, allowRetry = true, waitForFlush = false) => {
		if (closed) return false;
		// 首包解析阶段既没有 writer 也没有连接任务；返回 false 交给上层继续协议解析。
		// 已建立会话的重拨阶段则先收纳，drain 会等待新 writer，避免数据被误当成首包。
		if (!获取写入器() && !获取连接任务?.()) return false;
		const chunk = hog(data);
		if (!chunk.byteLength) return true;
		const nextBytes = grain.字节数 + chunk.byteLength;
		const nextItems = grain.条目数 + 1;
		if (nextBytes > fado || nextItems > fahd) {
			closed = true;
			const err = Object.assign(new Error(`${名称}: upload queue overflow (${nextBytes}B/${nextItems})`), { isQueueOverflow: true });
			clear(err);
			log(`[${名称}] 队列超限，关闭连接`);
			try { 关闭连接?.(err) } catch (_) { }
			throw err;
		}
		let completionPromise = null;
		let completions = null;
		if (waitForFlush) {
			completions = [];
			completionPromise = new Promise((resolve, reject) => completions.push({ resolve, reject }));
		}
		grain.收纳({ chunk, allowRetry, completions });
		if (!draining) drain();
		return waitForFlush ? completionPromise.then(() => true) : true;
	};

	return {
		写入(data, allowRetry = true) {
			return enqueue(data, allowRetry, false);
		},
		写入并等待(data, allowRetry = true) {
			return enqueue(data, allowRetry, true);
		},
		async 等待空() {
			if (!grain.字节数 && !draining) return;
			await new Promise(resolve => idleResolvers.push(resolve));
		},
		清空() {
			closed = true;
			clear();
		}
	};
}

function 创建下行Grain发送器(webSocket, headerData = null, isActive = null) {
	const packetCap = fail;
	const tailBytes = fain;
	const grain = 创建Grain收纳器(packetCap, true);
	let header = typeof headerData === 'function' ? null : headerData;
	const 获取响应头 = typeof headerData === 'function' ? headerData : () => {
		const value = header;
		header = null;
		return value;
	};
	let flushTimer = null;
	let generation = 0;
	let scheduledGeneration = 0;
	let waitRounds = 0;
	let flushPromise = null;
	let directSendPromise = null;
	let 强制排空 = false;
	let 停止已开始 = false;
	let 活动发送数 = 0;
	let 活动直发数 = 0;
	let 活动发送错误 = null;
	let 活动发送等待者 = [];
	const 等待活动发送完成 = () => {
		if (!活动发送数 && !活动直发数) return Promise.resolve();
		return new Promise(resolve => 活动发送等待者.push(resolve));
	};
	const 标记发送完成 = () => {
		if (活动发送数 || 活动直发数 || !活动发送等待者.length) return;
		const resolvers = 活动发送等待者;
		活动发送等待者 = [];
		for (const resolve of resolvers) resolve();
	};
	const 检查活动发送错误 = () => {
		if (!活动发送错误) return;
		const err = 活动发送错误;
		grain.清空();
		throw err;
	};
	const 当前发送器有效 = () => 强制排空 || !isActive || isActive();
	const 关闭活动连接 = () => {
		if (当前发送器有效()) closeSocketQuietly(webSocket);
	};

	const 发送原始块 = async (chunk) => {
		if (!当前发送器有效()) return;
		if (webSocket.readyState !== WebSocket.OPEN) throw new Error('ws.readyState is not open');
		chunk = 附加响应头(chunk);
		await WebSocket发送并等待(webSocket, chunk);
	};

	const 串行发送原始块 = async (chunk) => {
		while (directSendPromise) await directSendPromise;
		const sendTask = 发送原始块(chunk);
		directSendPromise = sendTask;
		try { await sendTask }
		finally {
			if (directSendPromise === sendTask) directSendPromise = null;
		}
	};

	const 附加响应头 = (chunk) => {
		const responseHeader = 获取响应头();
		if (!responseHeader) return chunk;
		const merged = new Uint8Array(responseHeader.length + chunk.byteLength);
		merged.set(responseHeader, 0);
		merged.set(chunk, responseHeader.length);
		return merged;
	};

	const flush = async () => {
		while (flushPromise) await flushPromise;
		if (flushTimer) clearTimeout(flushTimer);
		flushTimer = null;
		waitRounds = 0;
		if (!当前发送器有效()) {
			grain.清空();
			return;
		}
		const 发送任务 = (async () => {
			for (; ;) {
				if (!当前发送器有效()) {
					grain.清空();
					break;
				}
				const packed = grain.合包();
				if (!packed) break;
				await 串行发送原始块(packed.chunk);
			}
		})();
		flushPromise = 发送任务.catch(err => {
			活动发送错误 ||= err;
			throw err;
		}).finally(() => { flushPromise = null });
		return flushPromise;
	};

	const scheduleFlush = () => {
		if (!当前发送器有效()) {
			grain.清空();
			return;
		}
		if (grain.为空 || flushTimer) return;
		if (grain.字节数 >= packetCap || packetCap - grain.字节数 < tailBytes) {
			flush().catch(关闭活动连接);
			return;
		}
		flushTimer = setTimeout(() => {
			flushTimer = null;
			if (!当前发送器有效()) {
				grain.清空();
				return;
			}
			if (grain.为空) return;
			if (grain.字节数 >= packetCap || packetCap - grain.字节数 < tailBytes) {
				flush().catch(关闭活动连接);
				return;
			}
			if (waitRounds < fake && (generation !== scheduledGeneration || grain.字节数 < fair)) {
				waitRounds++;
				scheduledGeneration = generation;
				scheduleFlush();
				return;
			}
			flush().catch(关闭活动连接);
		}, 1);
	};

	return {
		async 直接发送(data) {
			if (停止已开始 || !当前发送器有效()) return;
			活动直发数++;
			try {
				const chunk = hog(data);
				if (!chunk.byteLength) return;
				await 串行发送原始块(chunk);
			} catch (err) {
				活动发送错误 ||= err;
				throw err;
			} finally {
				活动直发数--;
				标记发送完成();
			}
		},
		async 发送(data) {
			if (停止已开始 || !当前发送器有效()) return;
			活动发送数++;
			try {
				const chunk = hog(data);
				if (!chunk.byteLength) return;
				let offset = 0;
				const totalBytes = chunk.byteLength;
				while (offset < totalBytes) {
					const remainingBytes = totalBytes - offset;
					if (grain.为空 && remainingBytes >= packetCap) {
						const sendBytes = Math.min(packetCap, remainingBytes);
						const view = offset || sendBytes !== totalBytes ? chunk.subarray(offset, offset + sendBytes) : chunk;
						await 串行发送原始块(view);
						offset += sendBytes;
						continue;
					}
					const copyBytes = Math.min(packetCap - grain.字节数, totalBytes - offset);
					if (!copyBytes) {
						await flush();
						continue;
					}
					grain.收纳({ chunk: offset || copyBytes !== totalBytes ? chunk.subarray(offset, offset + copyBytes) : chunk });
					offset += copyBytes;
					generation++;
					if (grain.字节数 >= packetCap || packetCap - grain.字节数 < tailBytes) await flush();
					else scheduleFlush();
				}
			} catch (err) {
				活动发送错误 ||= err;
				throw err;
			} finally {
				活动发送数--;
				标记发送完成();
			}
		},
		flush,
		async 停止并刷新() {
			if (停止已开始) {
				await 等待活动发送完成();
				while (directSendPromise) await directSendPromise;
				检查活动发送错误();
				await flush();
				return;
			}
			停止已开始 = true;
			强制排空 = true;
			if (flushTimer) clearTimeout(flushTimer);
			flushTimer = null;
			await 等待活动发送完成();
			while (directSendPromise) await directSendPromise;
			检查活动发送错误();
			await flush();
		}
	};
}

async function connectStreams(remoteSocket, webSocket, headerData, retryFunc, isCurrentSocket = null, remoteConnWrapper = null) {
	let header = headerData, hasData = false, reader, useBYOB = false, readError = null;
	const BYOB单次读取上限 = 64 * 1024;
	const 当前连接仍有效 = () => !isCurrentSocket || isCurrentSocket();
	const 下行发送器 = 创建下行Grain发送器(webSocket, header, 当前连接仍有效);
	header = null;
	const 下行控制器 = { 停止并刷新: () => 下行发送器.停止并刷新() };
	if (remoteConnWrapper) remoteConnWrapper.downlinkController = 下行控制器;
	try { remoteSocket.closed?.catch?.(() => { }) } catch (e) { }

	try { reader = remoteSocket.readable.getReader({ mode: 'byob' }); useBYOB = true }
	catch (e) { reader = remoteSocket.readable.getReader() }

	try {
		if (!useBYOB) {
			while (true) {
				const { done, value } = await reader.read();
				if (!当前连接仍有效()) break;
				if (done) break;
				if (!value || value.byteLength === 0) continue;
				hasData = true;
				if (value.byteLength >= fail) {
					await 下行发送器.flush();
					await 下行发送器.直接发送(value);
				} else {
					await 下行发送器.发送(value);
				}
			}
		} else {
			let readBuffer = new ArrayBuffer(BYOB单次读取上限);
			while (true) {
				const { done, value } = await reader.read(new Uint8Array(readBuffer, 0, BYOB单次读取上限));
				if (!当前连接仍有效()) break;
				if (done) break;
				if (!value || value.byteLength === 0) continue;
				hasData = true;
				if (value.byteLength >= fail) {
					await 下行发送器.flush();
					await 下行发送器.直接发送(value);
					readBuffer = new ArrayBuffer(BYOB单次读取上限);
				} else {
					await 下行发送器.发送(value.slice());
					readBuffer = value.buffer.byteLength >= BYOB单次读取上限 ? value.buffer : new ArrayBuffer(BYOB单次读取上限);
				}
			}
		}
		if (当前连接仍有效()) await 下行发送器.flush();
	} catch (err) { readError = err }
	finally {
		if (当前连接仍有效() && webSocket.readyState === WebSocket.OPEN) {
			try { await 下行发送器.停止并刷新() } catch (err) { readError ||= err }
		}
		if (remoteConnWrapper?.downlinkController === 下行控制器) remoteConnWrapper.downlinkController = null;
		try { await reader.cancel() } catch (e) { }
		try { reader.releaseLock() } catch (e) { }
		try { remoteSocket.close() } catch (e) { }
	}
	if (!hasData && retryFunc && webSocket.readyState === WebSocket.OPEN && 当前连接仍有效()) {
		try {
			await retryFunc();
			return;
		} catch (err) {
			readError ||= err;
		}
	}
	if (!当前连接仍有效()) return;
	if (readError) log(`[TCP下行] 读取失败: ${readError?.message || readError}`);
	closeSocketQuietly(webSocket);
}

function isSpeedTestSite(hostname) {
	const speedTestDomains = ['speed.cloudflare.com', 'cp.cloudflare.com'];
	hostname = hostname.toLowerCase();
	return speedTestDomains.some(domain => hostname === domain || hostname.endsWith('.' + domain));
}

function 构造本地204响应(respHeader = null) {
	const 本地204响应 = new TextEncoder().encode(
		'HTTP/1.1 204 No Content\r\n' +
		'Content-Length: 0\r\n' +
		'Connection: close\r\n' +
		'\r\n'
	);
	if (有效数据长度(respHeader) === 0) return 本地204响应;
	const 协议响应头 = hog(respHeader);
	const response = new Uint8Array(协议响应头.byteLength + 本地204响应.byteLength);
	response.set(协议响应头, 0);
	response.set(本地204响应, 协议响应头.byteLength);
	log(`[TCP转发] 构造本地204响应: ${response.byteLength}B`);
	return response;
}

function 构造WS本地204响应(respHeader = null) {
	const WS本地204响应 = new TextEncoder().encode(
		'HTTP/1.1 204 No Content\r\n' +
		'Content-Length: 0\r\n' +
		'Connection: keep-alive\r\n' +
		'\r\n'
	);
	if (有效数据长度(respHeader) === 0) return WS本地204响应;
	const 协议响应头 = hog(respHeader);
	const response = new Uint8Array(协议响应头.byteLength + WS本地204响应.byteLength);
	response.set(协议响应头, 0);
	response.set(WS本地204响应, 协议响应头.byteLength);
	return response;
}

///////////////////////////////////////////////////////SOCKS5/HTTP函数///////////////////////////////////////////////
async function socks5Connect(targetHost, targetPort, initialData, TCP连接, parsedSocks5) {
	const { username, password, hostname, port } = parsedSocks5 || {};
	const socket = TCP连接({ hostname, port }), writer = socket.writable.getWriter(), reader = socket.readable.getReader();
	try {
		const authMethods = username && password ? new Uint8Array([0x05, 0x02, 0x00, 0x02]) : new Uint8Array([0x05, 0x01, 0x00]);
		await writer.write(authMethods);
		let response = await reader.read();
		if (response.done || response.value.byteLength < 2) throw new Error('S5 method selection failed');

		const selectedMethod = new Uint8Array(response.value)[1];
		if (selectedMethod === 0x02) {
			if (!username || !password) throw new Error('S5 requires authentication');
			const userBytes = new TextEncoder().encode(username), passBytes = new TextEncoder().encode(password);
			const authPacket = new Uint8Array([0x01, userBytes.length, ...userBytes, passBytes.length, ...passBytes]);
			await writer.write(authPacket);
			response = await reader.read();
			if (response.done || new Uint8Array(response.value)[1] !== 0x00) throw new Error('S5 authentication failed');
		} else if (selectedMethod !== 0x00) throw new Error(`S5 unsupported auth method: ${selectedMethod}`);

		const hostBytes = new TextEncoder().encode(targetHost);
		const connectPacket = new Uint8Array([0x05, 0x01, 0x00, 0x03, hostBytes.length, ...hostBytes, targetPort >> 8, targetPort & 0xff]);
		await writer.write(connectPacket);
		response = await reader.read();
		if (response.done || new Uint8Array(response.value)[1] !== 0x00) throw new Error('S5 connection failed');

		if (有效数据长度(initialData) > 0) await writer.write(initialData);
		writer.releaseLock(); reader.releaseLock();
		return socket;
	} catch (error) {
		try { writer.releaseLock() } catch (e) { }
		try { reader.releaseLock() } catch (e) { }
		try { socket.close() } catch (e) { }
		throw error;
	}
}

async function httpConnect(targetHost, targetPort, initialData, HTTPS代理 = false, TCP连接, parsedSocks5) {
	const { username, password, hostname, port } = parsedSocks5 || {};
	const socket = HTTPS代理
		? TCP连接({ hostname, port }, { secureTransport: 'on', allowHalfOpen: false })
		: TCP连接({ hostname, port });
	const writer = socket.writable.getWriter(), reader = socket.readable.getReader();
	const encoder = new TextEncoder();
	const decoder = new TextDecoder();
	try {
		if (HTTPS代理) await socket.opened;

		const auth = username && password ? `Proxy-Authorization: Basic ${btoa(`${username}:${password}`)}\r\n` : '';
		const request = `CONNECT ${targetHost}:${targetPort} HTTP/1.1\r\nHost: ${targetHost}:${targetPort}\r\n${auth}User-Agent: Mozilla/5.0\r\nConnection: keep-alive\r\n\r\n`;
		await writer.write(encoder.encode(request));
		writer.releaseLock();

		let responseBuffer = new Uint8Array(0), headerEndIndex = -1, bytesRead = 0;
		while (headerEndIndex === -1 && bytesRead < 8192) {
			const { done, value } = await reader.read();
			if (done || !value) throw new Error(`${HTTPS代理 ? 'HTTPS' : 'HTTP'} 代理在返回 CONNECT 响应前关闭连接`);
			responseBuffer = new Uint8Array([...responseBuffer, ...value]);
			bytesRead = responseBuffer.length;
			const crlfcrlf = responseBuffer.findIndex((_, i) => i < responseBuffer.length - 3 && responseBuffer[i] === 0x0d && responseBuffer[i + 1] === 0x0a && responseBuffer[i + 2] === 0x0d && responseBuffer[i + 3] === 0x0a);
			if (crlfcrlf !== -1) headerEndIndex = crlfcrlf + 4;
		}

		if (headerEndIndex === -1) throw new Error('代理 CONNECT 响应头过长或无效');
		const statusMatch = decoder.decode(responseBuffer.slice(0, headerEndIndex)).split('\r\n')[0].match(/HTTP\/\d\.\d\s+(\d+)/);
		const statusCode = statusMatch ? parseInt(statusMatch[1], 10) : NaN;
		if (!Number.isFinite(statusCode) || statusCode < 200 || statusCode >= 300) throw new Error(`Connection failed: HTTP ${statusCode}`);

		reader.releaseLock();

		if (有效数据长度(initialData) > 0) {
			const 远端写入器 = socket.writable.getWriter();
			await 远端写入器.write(initialData);
			远端写入器.releaseLock();
		}

		// CONNECT 响应头后可能夹带隧道数据，先回灌到可读流，避免首包被吞。
		if (bytesRead > headerEndIndex) {
			const { readable, writable } = new TransformStream();
			const transformWriter = writable.getWriter();
			await transformWriter.write(responseBuffer.subarray(headerEndIndex, bytesRead));
			transformWriter.releaseLock();
			socket.readable.pipeTo(writable).catch(() => { });
			return { readable, writable: socket.writable, closed: socket.closed, close: () => socket.close() };
		}

		return socket;
	} catch (error) {
		try { writer.releaseLock() } catch (e) { }
		try { reader.releaseLock() } catch (e) { }
		try { socket.close() } catch (e) { }
		throw error;
	}
}

async function httpsConnect(targetHost, targetPort, initialData, TCP连接, parsedSocks5) {
	const { username, password, hostname, port } = parsedSocks5 || {};
	const encoder = new TextEncoder();
	const decoder = new TextDecoder();
	let tlsSocket = null;
	const tlsServerName = hay(hostname) ? '' : hap(hostname);
	const 打开HTTPS代理TLS = async (allowChacha = false) => {
		const proxySocket = TCP连接({ hostname, port });
		try {
			await proxySocket.opened;
			const socket = new TlsClient(proxySocket, { serverName: tlsServerName, insecure: true, allowChacha });
			await socket.handshake();
			log(`[HTTPS代理] TLS版本: ${socket.msb ? '1.3' : '1.2'} | Cipher: 0x${socket.cipherSuite.toString(16)}${socket.cipherConfig?.chacha ? ' (ChaCha20)' : ' (AES-GCM)'}`);
			return socket;
		} catch (error) {
			try { proxySocket.close() } catch (e) { }
			throw error;
		}
	};
	try {
		try {
			tlsSocket = await 打开HTTPS代理TLS(false);
		} catch (error) {
			if (!/cipher|handshake|TLS Alert|ServerHello|Finished|Unsupported|Missing TLS/i.test(error?.message || `${error || ''}`)) throw error;
			log(`[HTTPS代理] AES-GCM TLS 握手失败，回退 ChaCha20 兼容模式: ${error?.message || error}`);
			tlsSocket = await 打开HTTPS代理TLS(true);
		}

		const auth = username && password ? `Proxy-Authorization: Basic ${btoa(`${username}:${password}`)}\r\n` : '';
		const request = `CONNECT ${targetHost}:${targetPort} HTTP/1.1\r\nHost: ${targetHost}:${targetPort}\r\n${auth}User-Agent: Mozilla/5.0\r\nConnection: keep-alive\r\n\r\n`;
		await tlsSocket.write(encoder.encode(request));

		let responseBuffer = new Uint8Array(0), headerEndIndex = -1, bytesRead = 0;
		while (headerEndIndex === -1 && bytesRead < 8192) {
			const value = await tlsSocket.read();
			if (!value) throw new Error('HTTPS 代理在返回 CONNECT 响应前关闭连接');
			responseBuffer = hot(responseBuffer, value);
			bytesRead = responseBuffer.length;
			const crlfcrlf = responseBuffer.findIndex((_, i) => i < responseBuffer.length - 3 && responseBuffer[i] === 0x0d && responseBuffer[i + 1] === 0x0a && responseBuffer[i + 2] === 0x0d && responseBuffer[i + 3] === 0x0a);
			if (crlfcrlf !== -1) headerEndIndex = crlfcrlf + 4;
		}

		if (headerEndIndex === -1) throw new Error('HTTPS 代理 CONNECT 响应头过长或无效');
		const statusMatch = decoder.decode(responseBuffer.slice(0, headerEndIndex)).split('\r\n')[0].match(/HTTP\/\d\.\d\s+(\d+)/);
		const statusCode = statusMatch ? parseInt(statusMatch[1], 10) : NaN;
		if (!Number.isFinite(statusCode) || statusCode < 200 || statusCode >= 300) throw new Error(`Connection failed: HTTP ${statusCode}`);

		if (有效数据长度(initialData) > 0) await tlsSocket.write(hog(initialData));
		const bufferedData = bytesRead > headerEndIndex ? responseBuffer.subarray(headerEndIndex, bytesRead) : null;
		let closedSettled = false, resolveClosed, rejectClosed;
		const settleClosed = (settle, value) => {
			if (!closedSettled) {
				closedSettled = true;
				settle(value);
			}
		};
		const closed = new Promise((resolve, reject) => {
			resolveClosed = resolve;
			rejectClosed = reject;
		});
		const close = () => {
			try { tlsSocket.close() } catch (e) { }
			settleClosed(resolveClosed);
		};
		const readable = new ReadableStream({
			async start(controller) {
				try {
					if (有效数据长度(bufferedData) > 0) controller.enqueue(bufferedData);
					while (true) {
						const data = await tlsSocket.read();
						if (!data) break;
						if (data.byteLength > 0) controller.enqueue(data);
					}
					try { controller.close() } catch (e) { }
					settleClosed(resolveClosed);
				} catch (error) {
					try { controller.error(error) } catch (e) { }
					settleClosed(rejectClosed, error);
				}
			},
			cancel() {
				close();
			}
		});
		const writable = new WritableStream({
			async write(chunk) {
				await tlsSocket.write(hog(chunk));
			},
			close,
			abort(error) {
				close();
				if (error) settleClosed(rejectClosed, error);
			}
		});
		return { readable, writable, closed, close };
	} catch (error) {
		try { tlsSocket?.close() } catch (e) { }
		throw error;
	}
}
function iw(ix) {
	const iaa = /** @type {any} */ (ix);
	const icc = iaa?.fetcher;
	if (!icc || typeof icc.connect !== 'function') throw new Error('request.fetcher.connect unavailable');
	return (ice, icu) => icu === undefined ? icc.connect(ice) : icc.connect(ice, icu);
}
const icy = 769, ida = 771, idf = 772;
const ido = 20, idp = 21, ied = 22, ifc = 23;
const iga = 1, igd = 2, ige = 4, igg = 8, igm = 11, iii = 12, iis = 13, ike = 14, ilk = 15, ill = 16, ilo = 20, ilx = 24;
const imf = 0, imo = 10, imp = 11, imu = 13, inc = 16, inh = 43, ink = 45, inn = 51;
const inr = 0, ins = 1, ioc = 112;
const ion = iop => iop?.[0] === ins && iop?.[1] === ioc;
const iou = new TextEncoder();
const ipo = new TextDecoder();
const ipv = new Uint8Array(0);
const ira = new Map([
	[4865, { id: 4865, keyLen: 16, ivLen: 12, hash: "SHA-256", tls13: !0 }],
	[4866, { id: 4866, keyLen: 32, ivLen: 12, hash: "SHA-384", tls13: !0 }],
	[4867, { id: 4867, keyLen: 32, ivLen: 12, hash: "SHA-256", tls13: !0, chacha: !0 }],
	[49199, { id: 49199, keyLen: 16, ivLen: 4, hash: "SHA-256", kex: "ECDHE" }],
	[49200, { id: 49200, keyLen: 32, ivLen: 4, hash: "SHA-384", kex: "ECDHE" }],
	[52392, { id: 52392, keyLen: 32, ivLen: 12, hash: "SHA-256", kex: "ECDHE", chacha: !0 }],
	[49195, { id: 49195, keyLen: 16, ivLen: 4, hash: "SHA-256", kex: "ECDHE" }],
	[49196, { id: 49196, keyLen: 32, ivLen: 4, hash: "SHA-384", kex: "ECDHE" }],
	[52393, { id: 52393, keyLen: 32, ivLen: 12, hash: "SHA-256", kex: "ECDHE", chacha: !0 }]
]);
const ire = new Map([[29, "X25519"], [23, "P-256"]]);
const irk = [2052, 2053, 2054, 1025, 1281, 1537, 1027, 1283, 1539];
const irs = (...isi) => {
	const ism = isn => isn.flatMap(iud => iud instanceof Uint8Array ? [...iud] : Array.isArray(iud) ? ism(iud) : "number" == typeof iud ? [iud] : []);
	return new Uint8Array(ism(isi))
};
const iva = ivp => [ivp >> 8 & 255, 255 & ivp];
const ivy = (iwo, iww) => iwo[iww] << 8 | iwo[iww + 1];
const ixc = (ixl, ji) => ixl[ji] << 16 | ixl[ji + 1] << 8 | ixl[ji + 2];
const jr = (...jv) => {
	const jab = jv.filter((jag => jag && jag.length > 0)),
		jak = jab.reduce(((jar, jat) => jar + jat.length), 0),
		jam = new Uint8Array(jak);
	let jan = 0;
	for (const jap of jab) jam.set(jap, jan), jan += jap.length;
	return jam
};
const jaw = jay => crypto.getRandomValues(new Uint8Array(jay));
const jem = (jew, jfk) => {
	if (!jew || !jfk || jew.length !== jfk.length) return !1;
	let jib = 0; for (let index = 0; index < jew.length; index++) jib |= jew[index] ^ jfk[index];
	return 0 === jib
};
const jig = jnd => "SHA-512" === jnd ? 64 : "SHA-384" === jnd ? 48 : 32;
async function jnr(jog, jot, jra) {
	const jug = await crypto.subtle.importKey("raw", jot, { name: "HMAC", hash: jog }, !1, ["sign"]);
	return new Uint8Array(await crypto.subtle.sign("HMAC", jug, jra))
}
async function jut(jack, jade) { return new Uint8Array(await crypto.subtle.digest(jack, jade)) }
async function jail(jain, jamb, jape, jati, jazz = "SHA-256") {
	const ka = jr(iou.encode(jamb), jape);
	let kb = new Uint8Array(0),
		kc = ka;
	for (; kb.length < jati;) {
		kc = await jnr(jazz, jain, kc);
		const kg = await jnr(jazz, jain, jr(kc, ka));
		kb = jr(kb, kg)
	}
	return kb.slice(0, jati)
}
async function ki(km, ko, kp) {
	return ko && ko.length || (ko = new Uint8Array(jig(km))), jnr(km, ko, kp)
}
async function kr(ks, kt, kv, kw, ky) {
	const kat = iou.encode("tls13 " + kv);
	return async function (kbo, kea, keb, keg) {
		const ken = jig(kbo),
			kgb = Math.ceil(keg / ken);
		let khi = new Uint8Array(0),
			khz = new Uint8Array(0);
		for (let kid = 1; kid <= kgb; kid++) khz = await jnr(kbo, kea, jr(khz, keb, [kid])), khi = jr(khi, khz);
		return khi.slice(0, keg)
	}(ks, kt, irs(iva(ky), kat.length, kat, kw.length, kw), ky)
}
async function kin(kip = "P-256") {
	const kit = "X25519" === kip ? { name: "X25519" } : { name: "ECDH", namedCurve: kip };
	const kob = /** @type {CryptoKeyPair} */ (await crypto.subtle.generateKey(kit, !0, ["deriveBits"]));
	const kor = /** @type {ArrayBuffer} */ (await crypto.subtle.exportKey("raw", kob.publicKey));
	return { keyPair: kob, publicKeyRaw: new Uint8Array(kor) }
}
async function kos(kph, kui, kwa = "P-256") {
	const kyd = "X25519" === kwa ? { name: "X25519" } : { name: "ECDH", namedCurve: kwa },
		la = await crypto.subtle.importKey("raw", kui, kyd, !1, []),
		lb = "P-384" === kwa ? 384 : "P-521" === kwa ? 528 : 256;
	return new Uint8Array(await crypto.subtle.deriveBits(/** @type {any} */({ name: kyd.name, public: la }), kph, lb))
}
async function le(lf, lh) { return crypto.subtle.importKey("raw", lf, { name: "AES-GCM" }, !1, lh) }
async function li(lm, lp, lr, lu) {
	return new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv: lp, additionalData: lu, tagLength: 128 }, lm, lr))
}
async function lv(lx, lab, lac, lad) {
	return new Uint8Array(await crypto.subtle.decrypt({ name: "AES-GCM", iv: lab, additionalData: lad, tagLength: 128 }, lx, lac))
}
function lag(lah, lam) { return (lah << lam | lah >>> 32 - lam) >>> 0 }
function lan(lao, lap, lat, lav, law) {
	lao[lap] = lao[lap] + lao[lat] >>> 0, lao[law] = lag(lao[law] ^ lao[lap], 16), lao[lav] = lao[lav] + lao[law] >>> 0, lao[lat] = lag(lao[lat] ^ lao[lav], 12), lao[lap] = lao[lap] + lao[lat] >>> 0, lao[law] = lag(lao[law] ^ lao[lap], 8), lao[lav] = lao[lav] + lao[law] >>> 0, lao[lat] = lag(lao[lat] ^ lao[lav], 7)
}
function lax(lay, lbj, lcd) {
	const lcm = new Uint32Array(16);
	lcm[0] = 1634760805, lcm[1] = 857760878, lcm[2] = 2036477234, lcm[3] = 1797285236;
	const ldl = new DataView(lay.buffer, lay.byteOffset, lay.byteLength);
	for (let wordIndex = 0; wordIndex < 8; wordIndex++) lcm[4 + wordIndex] = ldl.getUint32(4 * wordIndex, !0);
	lcm[12] = lbj;
	const lea = new DataView(lcd.buffer, lcd.byteOffset, lcd.byteLength);
	lcm[13] = lea.getUint32(0, !0), lcm[14] = lea.getUint32(4, !0), lcm[15] = lea.getUint32(8, !0);
	const led = new Uint32Array(lcm);
	for (let lee = 0; lee < 10; lee++) lan(led, 0, 4, 8, 12), lan(led, 1, 5, 9, 13), lan(led, 2, 6, 10, 14), lan(led, 3, 7, 11, 15), lan(led, 0, 5, 10, 15), lan(led, 1, 6, 11, 12), lan(led, 2, 7, 8, 13), lan(led, 3, 4, 9, 14);
	for (let leg = 0; leg < 16; leg++) led[leg] = led[leg] + lcm[leg] >>> 0;
	return new Uint8Array(led.buffer.slice(0))
}
function lei(lek, lem, leo) {
	const ler = new Uint8Array(leo.length);
	let leu = 1;
	for (let lev = 0; lev < leo.length; lev += 64) {
		const ley = lax(lek, leu++, lem),
			lgb = Math.min(64, leo.length - lev);
		for (let lgv = 0; lgv < lgb; lgv++) ler[lev + lgv] = leo[lev + lgv] ^ ley[lgv]
	}
	return ler
}
function lid(lie, lii) {
	const lin = function (lip) {
		const lir = new Uint8Array(lip);
		return lir[3] &= 15, lir[7] &= 15, lir[11] &= 15, lir[15] &= 15, lir[4] &= 252, lir[8] &= 252, lir[12] &= 252, lir
	}(lie.slice(0, 16)),
		lit = lie.slice(16, 32);
	let liv = [0n, 0n, 0n, 0n, 0n];
	const llb = [0x3ffffffn & BigInt(lin[0] | lin[1] << 8 | lin[2] << 16 | lin[3] << 24), 0x3ffffffn & BigInt(lin[3] >> 2 | lin[4] << 6 | lin[5] << 14 | lin[6] << 22), 0x3ffffffn & BigInt(lin[6] >> 4 | lin[7] << 4 | lin[8] << 12 | lin[9] << 20), 0x3ffffffn & BigInt(lin[9] >> 6 | lin[10] << 2 | lin[11] << 10 | lin[12] << 18), 0x3ffffffn & BigInt(lin[13] | lin[14] << 8 | lin[15] << 16)];
	for (let lld = 0; lld < lii.length; lld += 16) {
		const llm = lii.slice(lld, lld + 16),
			lob = new Uint8Array(17);
		lob.set(llm), lob[llm.length] = 1, liv[0] += BigInt(lob[0] | lob[1] << 8 | lob[2] << 16 | (3 & lob[3]) << 24), liv[1] += BigInt(lob[3] >> 2 | lob[4] << 6 | lob[5] << 14 | (15 & lob[6]) << 22), liv[2] += BigInt(lob[6] >> 4 | lob[7] << 4 | lob[8] << 12 | (63 & lob[9]) << 20), liv[3] += BigInt(lob[9] >> 6 | lob[10] << 2 | lob[11] << 10 | lob[12] << 18), liv[4] += BigInt(lob[13] | lob[14] << 8 | lob[15] << 16 | lob[16] << 24);
		const loo = [0n, 0n, 0n, 0n, 0n];
		for (let lop = 0; lop < 5; lop++)
			for (let lot = 0; lot < 5; lot++) {
				const low = lop + lot;
				low < 5 ? loo[low] += liv[lop] * llb[lot] : loo[low - 5] += liv[lop] * llb[lot] * 5n
			}
		let lox = 0n;
		for (let lpn = 0; lpn < 5; lpn++) loo[lpn] += lox, liv[lpn] = 0x3ffffffn & loo[lpn], lox = loo[lpn] >> 26n;
		liv[0] += 5n * lox, lox = liv[0] >> 26n, liv[0] &= 0x3ffffffn, liv[1] += lox
	}
	let lsd = liv[0] | liv[1] << 26n | liv[2] << 52n | liv[3] << 78n | liv[4] << 104n;
	lsd = lsd + lit.reduce(((ltm, lug, luo) => ltm + (BigInt(lug) << BigInt(8 * luo))), 0n) & (1n << 128n) - 1n;
	const lux = new Uint8Array(16);
	for (let lvi = 0; lvi < 16; lvi++) lux[lvi] = Number(lsd >> BigInt(8 * lvi) & 0xffn);
	return lux
}
function lxi(lxv, lxx, lye, ma) {
	const mb = lax(lxv, 0, lxx).slice(0, 32),
		mc = lei(lxv, lxx, lye),
		md = (16 - ma.length % 16) % 16,
		me = (16 - mc.length % 16) % 16,
		mf = new Uint8Array(ma.length + md + mc.length + me + 16);
	mf.set(ma, 0), mf.set(mc, ma.length + md);
	const mg = new DataView(mf.buffer, ma.length + md + mc.length + me);
	mg.setBigUint64(0, BigInt(ma.length), !0), mg.setBigUint64(8, BigInt(mc.length), !0);
	const mi = lid(mb, mf);
	return jr(mc, mi)
}
function ml(mm, mn, mo, mp) {
	if (mo.length < 16) throw new Error("Error");
	const mr = mo.slice(-16),
		ms = mo.slice(0, -16),
		mt = lax(mm, 0, mn).slice(0, 32),
		mu = (16 - mp.length % 16) % 16,
		mv = (16 - ms.length % 16) % 16,
		mx = new Uint8Array(mp.length + mu + ms.length + mv + 16);
	mx.set(mp, 0), mx.set(ms, mp.length + mu);
	const mad = new DataView(mx.buffer, mp.length + mu + ms.length + mv);
	mad.setBigUint64(0, BigInt(mp.length), !0), mad.setBigUint64(8, BigInt(ms.length), !0);
	const mag = lid(mt, mx);
	let mak = 0;
	for (let mam = 0; mam < 16; mam++) mak |= mr[mam] ^ mag[mam];
	if (0 !== mak) throw new Error("Error");
	return lei(mm, mn, ms)
}
const man = 16 * 1024;
function mao(mar, mat, maw = ida) {
	const may = hog(mat);
	const mba = new Uint8Array(5 + may.byteLength);
	mba[0] = mar;
	mba[1] = maw >> 8 & 255;
	mba[2] = maw & 255;
	mba[3] = may.byteLength >> 8 & 255;
	mba[4] = may.byteLength & 255;
	mba.set(may, 5);
	return mba;
}
function mbd(mcg, mdi) { return irs(mcg, (med => [med >> 16 & 255, med >> 8 & 255, 255 & med])(mdi.length), mdi) }
class meg {
	constructor() { this.buffer = new Uint8Array(0) }
	feed(mei) {
		const mek = hog(mei);
		this.buffer = this.buffer.length ? jr(this.buffer, mek) : mek
	}
	next() {
		if (this.buffer.length < 5) return null;
		const mem = this.buffer[0],
			men = ivy(this.buffer, 1),
			meq = ivy(this.buffer, 3);
		if (this.buffer.length < 5 + meq) return null;
		const mew = this.buffer.subarray(5, 5 + meq);
		return this.buffer = this.buffer.subarray(5 + meq), { type: mem, version: men, length: meq, fragment: mew }
	}
}
class mfa {
	constructor() { this.buffer = new Uint8Array(0) }
	feed(mho) {
		const mhz = hog(mho);
		this.buffer = this.buffer.length ? jr(this.buffer, mhz) : mhz
	}
	next() {
		if (this.buffer.length < 4) return null;
		const mib = this.buffer[0],
			length = ixc(this.buffer, 1);
		if (this.buffer.length < 4 + length) return null;
		const mic = this.buffer.subarray(4, 4 + length),
			mid = this.buffer.subarray(0, 4 + length);
		return this.buffer = this.buffer.subarray(4 + length), { type: mib, length, body: mic, raw: mid }
	}
}
function mil(mit) {
	let mix = 0;
	const mko = ivy(mit, mix);
	mix += 2;
	const mls = mit.slice(mix, mix + 32);
	mix += 32;
	const moa = mit[mix++],
		mob = mit.slice(mix, mix + moa);
	mix += moa;
	const mod = ivy(mit, mix);
	mix += 2;
	const mol = mit[mix++];
	let mom = mko,
		mon = null,
		moo = null;
	if (mix < mit.length) {
		const mop = ivy(mit, mix);
		mix += 2;
		const mot = mix + mop;
		for (; mix + 4 <= mot;) {
			const mow = ivy(mit, mix);
			mix += 2;
			const mph = ivy(mit, mix);
			mix += 2;
			const mps = mit.slice(mix, mix + mph);
			if (mix += mph, mow === inh && mph >= 2) mom = ivy(mps, 0);
			else if (mow === inn && mph >= 4) {
				const mrd = ivy(mps, 0),
					mri = ivy(mps, 2);
				mon = { group: mrd, key: mps.slice(4, 4 + mri) }
			} else mow === inc && mph >= 3 && (moo = ipo.decode(mps.slice(3, 3 + mps[2])))
		}
	}
	const mrs = new Uint8Array([207, 33, 173, 116, 229, 154, 97, 17, 190, 29, 140, 2, 30, 101, 184, 145, 194, 162, 17, 22, 122, 187, 140, 94, 7, 158, 9, 226, 200, 168, 51, 156]);
	return { version: mko, serverRandom: mls, sessionId: mob, cipherSuite: mod, compression: mol, selectedVersion: mom, keyShare: mon, alpn: moo, isHRR: jem(mls, mrs), msb: mom === idf }
}
function parseServerKeyExchange(body) {
	let offset = 1;
	const namedCurve = ivy(body, offset);
	offset += 2;
	const keyLength = body[offset++];
	return { namedCurve, serverPublicKey: body.slice(offset, offset + keyLength) }
}

function extractLeafCertificate(body, hasContext = 0) {
	let offset = 0;
	if (hasContext) {
		const contextLength = body[offset++];
		offset += contextLength
	}
	if (offset + 3 > body.length) return null;
	const certificateListLength = ixc(body, offset);
	if (offset += 3, !certificateListLength || offset + 3 > body.length) return null;
	const certificateLength = ixc(body, offset);
	return offset += 3, certificateLength ? body.slice(offset, offset + certificateLength) : null
}

function parseEncryptedExtensions(body) {
	const parsed = { alpn: null };
	let offset = 2;
	const extensionsEnd = 2 + ivy(body, 0);
	for (; offset + 4 <= extensionsEnd;) {
		const extensionType = ivy(body, offset);
		offset += 2;
		const extensionLength = ivy(body, offset);
		if (offset += 2, extensionType === inc && extensionLength >= 3) {
			const protocolLength = body[offset + 2];
			protocolLength > 0 && offset + 3 + protocolLength <= offset + extensionLength && (parsed.alpn = ipo.decode(body.slice(offset + 3, offset + 3 + protocolLength)))
		}
		offset += extensionLength
	}
	return parsed
}

function buildClientHello(clientRandom, serverName, keyShares, { tls13: enableTls13 = !0, tls12: enableTls12 = !0, alpn = null, chacha = !0 } = {}) {
	const cipherIds = [];
	enableTls13 && cipherIds.push(4865, 4866, ...(chacha ? [4867] : [])), enableTls12 && cipherIds.push(49199, 49200, 49195, 49196, ...(chacha ? [52392, 52393] : []));
	const cipherBytes = irs(...cipherIds.flatMap(iva)),
		extensions = [irs(255, 1, 0, 1, 0)];
	if (serverName) {
		const serverNameBytes = iou.encode(serverName),
			serverNameList = irs(0, iva(serverNameBytes.length), serverNameBytes);
		extensions.push(irs(iva(imf), iva(serverNameList.length + 2), iva(serverNameList.length), serverNameList))
	}
	extensions.push(irs(iva(imp), 0, 2, 1, 0)), extensions.push(irs(iva(imo), 0, 6, 0, 4, 0, 29, 0, 23));
	const signatureBytes = irs(...irk.flatMap(iva));
	extensions.push(irs(iva(imu), iva(signatureBytes.length + 2), iva(signatureBytes.length), signatureBytes));
	const protocols = Array.isArray(alpn) ? alpn.filter(Boolean) : alpn ? [alpn] : [];
	if (protocols.length) {
		const alpnBytes = jr(...protocols.map((protocol => { const protocolBytes = iou.encode(protocol); return irs(protocolBytes.length, protocolBytes) })));
		extensions.push(irs(iva(inc), iva(alpnBytes.length + 2), iva(alpnBytes.length), alpnBytes))
	}
	if (enableTls13 && keyShares) {
		let keyShareBytes;
		if (extensions.push(enableTls12 ? irs(iva(inh), 0, 5, 4, 3, 4, 3, 3) : irs(iva(inh), 0, 3, 2, 3, 4)), extensions.push(irs(iva(ink), 0, 2, 1, 1)), keyShares?.x25519 && keyShares?.p256) keyShareBytes = jr(irs(0, 29, iva(keyShares.x25519.length), keyShares.x25519), irs(0, 23, iva(keyShares.p256.length), keyShares.p256));
		else if (keyShares?.x25519) keyShareBytes = irs(0, 29, iva(keyShares.x25519.length), keyShares.x25519);
		else if (keyShares?.p256) keyShareBytes = irs(0, 23, iva(keyShares.p256.length), keyShares.p256);
		else {
			if (!(keyShares instanceof Uint8Array)) throw new Error("Invalid keyShares");
			keyShareBytes = irs(0, 23, iva(keyShares.length), keyShares)
		}
		extensions.push(irs(iva(inn), iva(keyShareBytes.length + 2), iva(keyShareBytes.length), keyShareBytes))
	}
	const extensionsBytes = jr(...extensions);
	return mbd(iga, irs(iva(ida), clientRandom, 0, iva(cipherBytes.length), cipherBytes, 1, 0, iva(extensionsBytes.length), extensionsBytes))
}
const uint64be = sequenceNumber => { const bytes = new Uint8Array(8); return new DataView(bytes.buffer).setBigUint64(0, sequenceNumber, !1), bytes },
	xorSequenceIntoIv = (initializationVector, sequenceNumber) => {
		const nonce = initializationVector.slice(),
			sequenceBytes = uint64be(sequenceNumber);
		for (let index = 0; index < 8; index++) nonce[nonce.length - 8 + index] ^= sequenceBytes[index];
		return nonce
	},
	deriveTrafficKeys = (hash, secret, keyLen, ivLen) => Promise.all([kr(hash, secret, "key", ipv, keyLen), kr(hash, secret, "iv", ipv, ivLen)]);
class TlsClient {
	constructor(socket, options = {}) {
		if (this.socket = socket, this.serverName = options.serverName || "", this.supportTls13 = !1 !== options.tls13, this.supportTls12 = !1 !== options.tls12, !this.supportTls13 && !this.supportTls12) throw new Error("At least one TLS version must be enabled");
		this.alpnProtocols = Array.isArray(options.alpn) ? options.alpn : options.alpn ? [options.alpn] : null, this.allowChacha = options.allowChacha !== false, this.timeout = options.timeout ?? 3e4, this.clientRandom = jaw(32), this.serverRandom = null, this.handshakeChunks = [], this.handshakeComplete = !1, this.negotiatedAlpn = null, this.cipherSuite = null, this.cipherConfig = null, this.msb = !1, this.masterSecret = null, this.handshakeSecret = null, this.clientWriteKey = null, this.serverWriteKey = null, this.clientWriteIv = null, this.serverWriteIv = null, this.clientHandshakeKey = null, this.serverHandshakeKey = null, this.clientHandshakeIv = null, this.serverHandshakeIv = null, this.clientAppKey = null, this.serverAppKey = null, this.clientAppIv = null, this.serverAppIv = null, this.clientWriteCryptoKey = null, this.serverWriteCryptoKey = null, this.clientHandshakeCryptoKey = null, this.serverHandshakeCryptoKey = null, this.clientAppCryptoKey = null, this.serverAppCryptoKey = null, this.clientSeqNum = 0n, this.serverSeqNum = 0n, this.recordParser = new meg, this.handshakeParser = new mfa, this.keyPairs = new Map, this.ecdhKeyPair = null, this.sawCert = !1
	}
	recordHandshake(chunk) { this.handshakeChunks.push(chunk) }
	transcript() { return 1 === this.handshakeChunks.length ? this.handshakeChunks[0] : jr(...this.handshakeChunks) }
	getCipherConfig(cipherSuite) { return ira.get(cipherSuite) || null }
	async readChunk(reader) { return this.timeout ? Promise.race([reader.read(), new Promise(((resolve, reject) => setTimeout((() => reject(new Error("TLS read timeout"))), this.timeout)))]) : reader.read() }
	async readRecordsUntil(reader, predicate, closedError) {
		for (; ;) {
			let record;
			for (; record = this.recordParser.next();)
				if (await predicate(record)) return;
			const { value, done } = await this.readChunk(reader);
			if (done) throw new Error(closedError);
			this.recordParser.feed(value)
		}
	}
	async readHandshakeUntil(reader, predicate, closedError) {
		for (let message; message = this.handshakeParser.next();)
			if (await predicate(message)) return;
		return this.readRecordsUntil(reader, (async record => {
			if (record.type === idp) {
				if (ion(record.fragment)) return;
				throw new Error(`TLS Alert: ${record.fragment[1]}`);
			}
			if (record.type === ied) {
				this.handshakeParser.feed(record.fragment);
				for (let message; message = this.handshakeParser.next();)
					if (await predicate(message)) return 1
			}
		}), closedError)
	}
	async acceptCertificate(certificate) { if (!certificate?.length) throw new Error("Empty certificate"); this.sawCert = !0 }
	async handshake() {
		const [p256Share, x25519Share] = await Promise.all([kin("P-256"), kin("X25519")]);
		this.keyPairs = new Map([[23, p256Share], [29, x25519Share]]), this.ecdhKeyPair = p256Share.keyPair;
		const reader = this.socket.readable.getReader(),
			writer = this.socket.writable.getWriter();
		try {
			const clientHello = buildClientHello(this.clientRandom, this.serverName, { x25519: x25519Share.publicKeyRaw, p256: p256Share.publicKeyRaw }, { tls13: this.supportTls13, tls12: this.supportTls12, alpn: this.alpnProtocols, chacha: this.allowChacha });
			this.recordHandshake(clientHello), await writer.write(mao(ied, clientHello, icy));
			const serverHello = await this.receiveServerHello(reader);
			if (serverHello.isHRR) throw new Error("HelloRetryRequest is not supported by TLSClientMini");
			if (serverHello.keyShare?.group && this.keyPairs.has(serverHello.keyShare.group)) {
				const selectedKeyPair = this.keyPairs.get(serverHello.keyShare.group);
				this.ecdhKeyPair = selectedKeyPair.keyPair
			}
			serverHello.msb ? await this.handshakeTls13(reader, writer, serverHello) : await this.handshakeTls12(reader, writer), this.handshakeComplete = !0
		} finally {
			reader.releaseLock(), writer.releaseLock()
		}
	}
	async receiveServerHello(reader) {
		for (; ;) {
			const { value, done } = await this.readChunk(reader);
			if (done) throw new Error("Connection closed waiting for ServerHello");
			let record;
			for (this.recordParser.feed(value); record = this.recordParser.next();) {
				if (record.type === idp) {
					if (ion(record.fragment)) continue;
					throw new Error(`TLS Alert: level=${record.fragment[0]}, desc=${record.fragment[1]}`);
				}
				if (record.type !== ied) continue;
				let message;
				for (this.handshakeParser.feed(record.fragment); message = this.handshakeParser.next();) {
					if (message.type !== igd) continue;
					this.recordHandshake(message.raw);
					const serverHello = mil(message.body);
					if (this.serverRandom = serverHello.serverRandom, this.cipherSuite = serverHello.cipherSuite, this.cipherConfig = this.getCipherConfig(serverHello.cipherSuite), this.msb = serverHello.msb, this.negotiatedAlpn = serverHello.alpn || null, !this.cipherConfig) throw new Error(`Unsupported cipher suite: 0x${serverHello.cipherSuite.toString(16)}`);
					return serverHello
				}
			}
		}
	}
	async handshakeTls12(reader, writer) {
		/** @type {{ namedCurve: number, serverPublicKey: Uint8Array } | null} */
		let serverKeyExchange = null;
		let sawServerHelloDone = !1;
		let clientCertRequested = !1;
		if (await this.readHandshakeUntil(reader, (async message => {
			switch (message.type) {
				case igm: {
					this.recordHandshake(message.raw);
					const certificate = extractLeafCertificate(message.body, 1);
					if (!certificate) throw new Error("Missing TLS 1.2 certificate");
					await this.acceptCertificate(certificate);
					break
				}
				case iii:
					this.recordHandshake(message.raw), serverKeyExchange = parseServerKeyExchange(message.body);
					break;
				case ike:
					return this.recordHandshake(message.raw), sawServerHelloDone = !0, 1;
				case iis:
					this.recordHandshake(message.raw), clientCertRequested = !0;
					break;
				default:
					this.recordHandshake(message.raw)
			}
		}), "Connection closed during TLS 1.2 handshake"), !this.sawCert) throw new Error("Missing TLS 1.2 leaf certificate");
		const serverKeyExchangeData = /** @type {{ namedCurve: number, serverPublicKey: Uint8Array } | null} */ (serverKeyExchange);
		if (!serverKeyExchangeData) throw new Error("Missing TLS 1.2 ServerKeyExchange");
		const curveName = ire.get(serverKeyExchangeData.namedCurve);
		if (!curveName) throw new Error(`Unsupported named curve: 0x${serverKeyExchangeData.namedCurve.toString(16)}`);
		const keyShare = this.keyPairs.get(serverKeyExchangeData.namedCurve);
		if (!keyShare) throw new Error(`Missing key pair for curve: 0x${serverKeyExchangeData.namedCurve.toString(16)}`);
		const preMasterSecret = await kos(keyShare.keyPair.privateKey, serverKeyExchangeData.serverPublicKey, curveName),
			clientKeyExchange = mbd(ill, irs(keyShare.publicKeyRaw.length, keyShare.publicKeyRaw));
		if (clientCertRequested) {
			const emptyCertificate = mbd(igm, irs(0, 0, 0));
			this.recordHandshake(emptyCertificate), await writer.write(mao(ied, emptyCertificate))
		}
		this.recordHandshake(clientKeyExchange);
		const hashName = this.cipherConfig.hash;
		this.masterSecret = await jail(preMasterSecret, "master secret", jr(this.clientRandom, this.serverRandom), 48, hashName);
		const keyLen = this.cipherConfig.keyLen,
			ivLen = this.cipherConfig.ivLen,
			keyBlock = await jail(this.masterSecret, "key expansion", jr(this.serverRandom, this.clientRandom), 2 * keyLen + 2 * ivLen, hashName);
		this.clientWriteKey = keyBlock.slice(0, keyLen), this.serverWriteKey = keyBlock.slice(keyLen, 2 * keyLen), this.clientWriteIv = keyBlock.slice(2 * keyLen, 2 * keyLen + ivLen), this.serverWriteIv = keyBlock.slice(2 * keyLen + ivLen, 2 * keyLen + 2 * ivLen);
		if (!this.cipherConfig.chacha) [this.clientWriteCryptoKey, this.serverWriteCryptoKey] = await Promise.all([le(this.clientWriteKey, ["encrypt"]), le(this.serverWriteKey, ["decrypt"])]);
		await writer.write(mao(ied, clientKeyExchange)), await writer.write(mao(ido, irs(1)));
		const clientVerifyData = await jail(this.masterSecret, "client finished", await jut(hashName, this.transcript()), 12, hashName),
			finishedMessage = mbd(ilo, clientVerifyData);
		this.recordHandshake(finishedMessage), await writer.write(mao(ied, await this.encryptTls12(finishedMessage, ied)));
		let sawChangeCipherSpec = !1;
		await this.readRecordsUntil(reader, (async record => {
			if (record.type === idp) {
				if (ion(record.fragment)) return;
				throw new Error(`TLS Alert: ${record.fragment[1]}`);
			}
			if (record.type === ido) return void (sawChangeCipherSpec = !0);
			if (record.type !== ied || !sawChangeCipherSpec) return;
			const decrypted = await this.decryptTls12(record.fragment, ied);
			if (decrypted[0] !== ilo) return;
			const verifyLength = ixc(decrypted, 1),
				verifyData = decrypted.slice(4, 4 + verifyLength),
				expectedVerifyData = await jail(this.masterSecret, "server finished", await jut(hashName, this.transcript()), 12, hashName);
			if (!jem(verifyData, expectedVerifyData)) throw new Error("TLS 1.2 server Finished verify failed");
			return 1
		}), "Connection closed waiting for TLS 1.2 Finished")
	}
	async handshakeTls13(reader, writer, serverHello) {
		const groupName = ire.get(serverHello.keyShare?.group);
		if (!groupName || !serverHello.keyShare?.key?.length) throw new Error("Missing TLS 1.3 key_share");
		const hashName = this.cipherConfig.hash,
			hashLen = jig(hashName),
			keyLen = this.cipherConfig.keyLen,
			ivLen = this.cipherConfig.ivLen,
			sharedSecret = await kos(this.ecdhKeyPair.privateKey, serverHello.keyShare.key, groupName),
			earlySecret = await ki(hashName, null, new Uint8Array(hashLen)),
			derivedSecret = await kr(hashName, earlySecret, "derived", await jut(hashName, ipv), hashLen);
		this.handshakeSecret = await ki(hashName, derivedSecret, sharedSecret);
		const transcriptHash = await jut(hashName, this.transcript()),
			clientHandshakeTrafficSecret = await kr(hashName, this.handshakeSecret, "c hs traffic", transcriptHash, hashLen),
			serverHandshakeTrafficSecret = await kr(hashName, this.handshakeSecret, "s hs traffic", transcriptHash, hashLen);
		[this.clientHandshakeKey, this.clientHandshakeIv] = await deriveTrafficKeys(hashName, clientHandshakeTrafficSecret, keyLen, ivLen), [this.serverHandshakeKey, this.serverHandshakeIv] = await deriveTrafficKeys(hashName, serverHandshakeTrafficSecret, keyLen, ivLen);
		if (!this.cipherConfig.chacha) [this.clientHandshakeCryptoKey, this.serverHandshakeCryptoKey] = await Promise.all([le(this.clientHandshakeKey, ["encrypt"]), le(this.serverHandshakeKey, ["decrypt"])]);
		const serverFinishedKey = await kr(hashName, serverHandshakeTrafficSecret, "finished", ipv, hashLen);
		let serverFinishedReceived = !1;
		let clientCertRequested = !1;
		const handleHandshakeMessage = async message => {
			switch (message.type) {
				case igg: {
					const encryptedExtensions = parseEncryptedExtensions(message.body);
					encryptedExtensions.alpn && (this.negotiatedAlpn = encryptedExtensions.alpn), this.recordHandshake(message.raw);
					break
				}
				case igm: {
					const certificate = extractLeafCertificate(message.body);
					if (!certificate) throw new Error("Missing TLS 1.3 certificate");
					await this.acceptCertificate(certificate), this.recordHandshake(message.raw);
					break
				}
				case iis:
					this.recordHandshake(message.raw), clientCertRequested = !0;
					break;
				case ilk:
					this.recordHandshake(message.raw);
					break;
				case ilo: {
					const expectedVerifyData = await jnr(hashName, serverFinishedKey, await jut(hashName, this.transcript()));
					if (!jem(expectedVerifyData, message.body)) throw new Error("TLS 1.3 server Finished verify failed");
					this.recordHandshake(message.raw), serverFinishedReceived = !0;
					break
				}
				default:
					this.recordHandshake(message.raw)
			}
		};
		await this.readRecordsUntil(reader, (async record => {
			if (record.type === ido || record.type === ied) return;
			if (record.type === idp) {
				if (ion(record.fragment)) return;
				throw new Error(`TLS Alert: ${record.fragment[1]}`);
			}
			if (record.type !== ifc) return;
			const decrypted = await this.decryptTls13Handshake(record.fragment),
				innerType = decrypted[decrypted.length - 1],
				plaintext = decrypted.slice(0, -1);
			if (innerType === ied) {
				this.handshakeParser.feed(plaintext);
				for (let message; message = this.handshakeParser.next();)
					if (await handleHandshakeMessage(message), serverFinishedReceived) return 1
			}
		}), "Connection closed during TLS 1.3 handshake");
		const applicationTranscriptHash = await jut(hashName, this.transcript()),
			masterDerivedSecret = await kr(hashName, this.handshakeSecret, "derived", await jut(hashName, ipv), hashLen),
			masterSecret = await ki(hashName, masterDerivedSecret, new Uint8Array(hashLen)),
			clientAppTrafficSecret = await kr(hashName, masterSecret, "c ap traffic", applicationTranscriptHash, hashLen),
			serverAppTrafficSecret = await kr(hashName, masterSecret, "s ap traffic", applicationTranscriptHash, hashLen);
		[this.clientAppKey, this.clientAppIv] = await deriveTrafficKeys(hashName, clientAppTrafficSecret, keyLen, ivLen), [this.serverAppKey, this.serverAppIv] = await deriveTrafficKeys(hashName, serverAppTrafficSecret, keyLen, ivLen);
		if (!this.cipherConfig.chacha) [this.clientAppCryptoKey, this.serverAppCryptoKey] = await Promise.all([le(this.clientAppKey, ["encrypt"]), le(this.serverAppKey, ["decrypt"])]);
		let clientFlightHandshake = ipv;
		if (clientCertRequested) clientFlightHandshake = mbd(igm, irs(0, 0, 0, 0)), this.recordHandshake(clientFlightHandshake);
		const clientFinishedKey = await kr(hashName, clientHandshakeTrafficSecret, "finished", ipv, hashLen),
			clientFinishedVerifyData = await jnr(hashName, clientFinishedKey, await jut(hashName, this.transcript())),
			clientFinishedMessage = mbd(ilo, clientFinishedVerifyData);
		this.recordHandshake(clientFinishedMessage), await writer.write(mao(ifc, await this.encryptTls13Handshake(jr(clientFlightHandshake, clientFinishedMessage, [ied])))), this.clientSeqNum = 0n, this.serverSeqNum = 0n
	}
	async encryptTls12(plaintext, contentType) {
		const sequenceNumber = this.clientSeqNum++,
			sequenceBytes = uint64be(sequenceNumber),
			additionalData = jr(sequenceBytes, [contentType], iva(ida), iva(plaintext.length));
		if (this.cipherConfig.chacha) {
			const nonce = xorSequenceIntoIv(this.clientWriteIv, sequenceNumber);
			return lxi(this.clientWriteKey, nonce, plaintext, additionalData)
		}
		const explicitNonce = jaw(8);
		if (!this.clientWriteCryptoKey) this.clientWriteCryptoKey = await le(this.clientWriteKey, ["encrypt"]);
		return jr(explicitNonce, await li(this.clientWriteCryptoKey, jr(this.clientWriteIv, explicitNonce), plaintext, additionalData))
	}
	async decryptTls12(ciphertext, contentType) {
		const sequenceNumber = this.serverSeqNum++,
			sequenceBytes = uint64be(sequenceNumber);
		if (this.cipherConfig.chacha) {
			const nonce = xorSequenceIntoIv(this.serverWriteIv, sequenceNumber);
			return ml(this.serverWriteKey, nonce, ciphertext, jr(sequenceBytes, [contentType], iva(ida), iva(ciphertext.length - 16)))
		}
		const explicitNonce = ciphertext.subarray(0, 8),
			encryptedData = ciphertext.subarray(8);
		if (!this.serverWriteCryptoKey) this.serverWriteCryptoKey = await le(this.serverWriteKey, ["decrypt"]);
		return lv(this.serverWriteCryptoKey, jr(this.serverWriteIv, explicitNonce), encryptedData, jr(sequenceBytes, [contentType], iva(ida), iva(encryptedData.length - 16)))
	}
	async encryptTls13Handshake(plaintext) {
		const nonce = xorSequenceIntoIv(this.clientHandshakeIv, this.clientSeqNum++),
			additionalData = irs(ifc, 3, 3, iva(plaintext.length + 16));
		if (this.cipherConfig.chacha) return lxi(this.clientHandshakeKey, nonce, plaintext, additionalData);
		if (!this.clientHandshakeCryptoKey) this.clientHandshakeCryptoKey = await le(this.clientHandshakeKey, ["encrypt"]);
		return li(this.clientHandshakeCryptoKey, nonce, plaintext, additionalData)
	}
	async decryptTls13Handshake(ciphertext) {
		const nonce = xorSequenceIntoIv(this.serverHandshakeIv, this.serverSeqNum++),
			additionalData = irs(ifc, 3, 3, iva(ciphertext.length));
		const decrypted = this.cipherConfig.chacha ? await ml(this.serverHandshakeKey, nonce, ciphertext, additionalData) : await lv(this.serverHandshakeCryptoKey || (this.serverHandshakeCryptoKey = await le(this.serverHandshakeKey, ["decrypt"])), nonce, ciphertext, additionalData);
		let innerTypeIndex = decrypted.length - 1;
		for (; innerTypeIndex >= 0 && !decrypted[innerTypeIndex];) innerTypeIndex--;
		return innerTypeIndex < 0 ? ipv : decrypted.slice(0, innerTypeIndex + 1)
	}
	async encryptTls13(data) {
		const plaintext = jr(data, [ifc]),
			nonce = xorSequenceIntoIv(this.clientAppIv, this.clientSeqNum++),
			additionalData = irs(ifc, 3, 3, iva(plaintext.length + 16));
		if (this.cipherConfig.chacha) return lxi(this.clientAppKey, nonce, plaintext, additionalData);
		if (!this.clientAppCryptoKey) this.clientAppCryptoKey = await le(this.clientAppKey, ["encrypt"]);
		return li(this.clientAppCryptoKey, nonce, plaintext, additionalData)
	}
	async decryptTls13(ciphertext) {
		const nonce = xorSequenceIntoIv(this.serverAppIv, this.serverSeqNum++),
			additionalData = irs(ifc, 3, 3, iva(ciphertext.length)),
			plaintext = this.cipherConfig.chacha ? await ml(this.serverAppKey, nonce, ciphertext, additionalData) : await lv(this.serverAppCryptoKey || (this.serverAppCryptoKey = await le(this.serverAppKey, ["decrypt"])), nonce, ciphertext, additionalData);
		let innerTypeIndex = plaintext.length - 1;
		for (; innerTypeIndex >= 0 && !plaintext[innerTypeIndex];) innerTypeIndex--;
		if (innerTypeIndex < 0) return {
			data: ipv,
			type: 0
		};
		return {
			data: plaintext.slice(0, innerTypeIndex),
			type: plaintext[innerTypeIndex]
		}
	}
	async write(data) {
		if (!this.handshakeComplete) throw new Error("Handshake not complete");
		const plaintext = hog(data);
		if (!plaintext.byteLength) return;
		const writer = this.socket.writable.getWriter();
		try {
			const records = [];
			for (let offset = 0; offset < plaintext.byteLength; offset += man) {
				const chunk = plaintext.subarray(offset, Math.min(offset + man, plaintext.byteLength));
				const encrypted = this.msb ? await this.encryptTls13(chunk) : await this.encryptTls12(chunk, ifc);
				records.push(mao(ifc, encrypted));
			}
			await writer.write(records.length === 1 ? records[0] : jr(...records))
		} finally {
			writer.releaseLock()
		}
	}
	async read() {
		for (; ;) {
			let record;
			for (; record = this.recordParser.next();) {
				if (record.type === idp) {
					if (record.fragment[1] === inr) return null;
					throw new Error(`TLS Alert: ${record.fragment[1]}`)
				}
				if (record.type !== ifc) continue;
				if (!this.msb) return this.decryptTls12(record.fragment, ifc);
				const { data, type } = await this.decryptTls13(record.fragment);
				if (type === ifc) return data;
				if (type === idp) {
					if (data[1] === inr) return null;
					throw new Error(`TLS Alert: ${data[1]}`)
				}
				if (type !== ied) continue;
				let message;
				for (this.handshakeParser.feed(data); message = this.handshakeParser.next();)
					if (message.type !== ige && message.type === ilx) throw new Error("TLS 1.3 KeyUpdate is not supported by TLSClientMini")
			}
			const reader = this.socket.readable.getReader();
			try {
				const { value, done } = await this.readChunk(reader);
				if (done) return null;
				this.recordParser.feed(value)
			} finally {
				reader.releaseLock()
			}
		}
	}
	close() { this.socket.close() }
}
function hap(hat = '') {
	const haw = String(hat || '').trim();
	return haw.startsWith('[') && haw.endsWith(']') ? haw.slice(1, -1) : haw;
}
function hay(hcg = '') {
	const hdl = hap(hcg);
	const hel = /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/;
	if (hel.test(hdl)) return true;
	if (!hdl.includes(':')) return false;
	try {
		new URL(`http://[${hdl}]/`);
		return true;
	} catch (e) {
		return false;
	}
}
const hem = 9999;
const hen = new Uint8Array([0x21, 0x12, 0xa4, 0x42]);
const hep = {
	ALLOCATE_REQUEST: 0x0003, ALLOCATE_SUCCESS: 0x0103, ALLOCATE_ERROR: 0x0113,
	CREATE_PERMISSION_REQUEST: 0x0008, CREATE_PERMISSION_SUCCESS: 0x0108,
	CONNECT_REQUEST: 0x000a, CONNECT_SUCCESS: 0x010a,
	CONNECTION_BIND_REQUEST: 0x000b, CONNECTION_BIND_SUCCESS: 0x010b
};
const het = {
	USERNAME: 0x0006, MESSAGE_INTEGRITY: 0x0008, ERROR_CODE: 0x0009,
	XOR_PEER_ADDRESS: 0x0012, REALM: 0x0014, NONCE: 0x0015,
	REQUESTED_TRANSPORT: 0x0019, CONNECTION_ID: 0x002a
};
async function hew(hex, hfc, hhs) {
	let hie;
	try {
		return await Promise.race([
			hex,
			new Promise((_, reject) => { hie = setTimeout(() => reject(new Error(hhs)), hfc) })
		]);
	} finally {
		clearTimeout(hie);
	}
}
function hin(hip) {
	const hit = String(hip || '').split('.');
	return hit.length === 4 && hit.every(part => /^\d{1,3}$/.test(part) && Number(part) >= 0 && Number(part) <= 255);
}
function hiv(hmo) {
	return -hmo & 3;
}
function hnd(hob, hod) {
	const hoe = hog(hod);
	const attribute = new Uint8Array(4 + hoe.byteLength + hiv(hoe.byteLength));
	const view = new DataView(attribute.buffer);
	view.setUint16(0, hob);
	view.setUint16(2, hoe.byteLength);
	attribute.set(hoe, 4);
	return attribute;
}

function createTurnStunMessage(type, transactionId, attributes) {
	const body = hot(...attributes);
	const header = new Uint8Array(20);
	const view = new DataView(header.buffer);
	view.setUint16(0, type);
	view.setUint16(2, body.byteLength);
	header.set(hen, 4);
	header.set(transactionId, 8);
	return hot(header, body);
}

function parseTurnErrorCode(data) {
	return data?.byteLength >= 4 ? (data[2] & 7) * 100 + data[3] : 0;
}

function randomTurnTransactionId() {
	return crypto.getRandomValues(new Uint8Array(12));
}

async function addTurnMessageIntegrity(message, key) {
	const signedMessage = new Uint8Array(message);
	const view = new DataView(signedMessage.buffer);
	view.setUint16(2, view.getUint16(2) + 24);
	const hmacKey = await crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: 'SHA-1' }, false, ['sign']);
	const signature = await crypto.subtle.sign('HMAC', hmacKey, signedMessage);
	return hot(signedMessage, hnd(het.MESSAGE_INTEGRITY, new Uint8Array(signature)));
}

async function readTurnStunMessage(reader, bufferedData = null, timeoutMessage = 'TURN response timed out') {
	let buffer = 有效数据长度(bufferedData) ? hog(bufferedData) : new Uint8Array(0);
	const pull = async () => {
		const { done, value } = await hew(reader.read(), hem, timeoutMessage);
		if (done) throw new Error('TURN server closed connection');
		if (value?.byteLength) buffer = hot(buffer, value);
	};
	while (buffer.byteLength < 20) await pull();

	const messageLength = 20 + ((buffer[2] << 8) | buffer[3]);
	if (messageLength > 65555) throw new Error('TURN response is too large');
	while (buffer.byteLength < messageLength) await pull();
	const messageBuffer = buffer.subarray(0, messageLength);
	if (hen.some((value, index) => messageBuffer[4 + index] !== value)) throw new Error('Invalid TURN/STUN response');

	const view = new DataView(messageBuffer.buffer, messageBuffer.byteOffset, messageBuffer.byteLength);
	const attributes = {};
	for (let offset = 20; offset + 4 <= messageLength;) {
		const type = view.getUint16(offset);
		const length = view.getUint16(offset + 2);
		if (offset + 4 + length > messageBuffer.byteLength) break;
		attributes[type] = messageBuffer.slice(offset + 4, offset + 4 + length);
		offset += 4 + length + hiv(length);
	}
	return {
		message: { type: view.getUint16(0), attributes },
		extraData: buffer.byteLength > messageLength ? buffer.subarray(messageLength) : null
	};
}

async function writeTurnBytes(writer, bytes, timeoutMessage) {
	await hew(writer.write(bytes), hem, timeoutMessage);
}

async function turnConnect(proxy, targetHost, targetPort, TCP连接) {
	proxy = { ...proxy, username: proxy.username ?? null, password: proxy.password ?? null };
	const resolvedTargetHost = hap(targetHost);
	/** @type {string | null} */
	let targetIp = hin(resolvedTargetHost) ? resolvedTargetHost : null;
	if (!targetIp) {
		const records = await ado(resolvedTargetHost, 'A');
		const recordData = records.find(item => item.type === 1 && hin(item.data))?.data;
		targetIp = typeof recordData === 'string' ? recordData : null;
	}
	if (!targetIp) throw new Error(`Could not resolve ${targetHost} to an IPv4 address for TURN CONNECT`);

	const turnHost = hap(proxy.hostname);
	let controlSocket = null, dataSocket = null, controlWriter = null, controlReader = null, dataWriter = null, dataReader = null, dataReaderReleased = false;
	const close = () => {
		try { controlSocket?.close?.() } catch (e) { }
		try { dataSocket?.close?.() } catch (e) { }
	};
	const releaseDataReader = () => {
		if (dataReaderReleased) return;
		dataReaderReleased = true;
		try { dataReader?.releaseLock?.() } catch (e) { }
	};

	try {
		controlSocket = TCP连接({ hostname: turnHost, port: proxy.port });
		await hew(controlSocket.opened, hem, 'TURN server connection timed out');
		controlWriter = controlSocket.writable.getWriter();
		controlReader = controlSocket.readable.getReader();

		const xorPeerAddress = new Uint8Array(8);
		xorPeerAddress[1] = 1;
		new DataView(xorPeerAddress.buffer).setUint16(2, targetPort ^ 0x2112);
		targetIp.split('.').forEach((value, index) => {
			xorPeerAddress[4 + index] = Number(value) ^ hen[index];
		});
		const peerAddress = hnd(het.XOR_PEER_ADDRESS, xorPeerAddress);
		const requestedTransport = new Uint8Array([6, 0, 0, 0]);

		await writeTurnBytes(controlWriter, createTurnStunMessage(
			hep.ALLOCATE_REQUEST,
			randomTurnTransactionId(),
			[hnd(het.REQUESTED_TRANSPORT, requestedTransport)]
		), 'TURN Allocate request timed out');

		let turnResponse = await readTurnStunMessage(controlReader, null, 'TURN Allocate response timed out');
		let message = turnResponse.message;
		let bufferedData = turnResponse.extraData;
		let integrityKey = null;
		let authAttributes = [];
		const sign = messageToSign => integrityKey ? addTurnMessageIntegrity(messageToSign, integrityKey) : Promise.resolve(messageToSign);

		if (
			message.type === hep.ALLOCATE_ERROR
			&& proxy.username !== null
			&& proxy.password !== null
			&& parseTurnErrorCode(message.attributes[het.ERROR_CODE]) === 401
		) {
			const realmBytes = message.attributes[het.REALM];
			const nonce = message.attributes[het.NONCE];
			if (!realmBytes || !nonce?.byteLength) throw new Error('TURN authentication challenge is missing realm or nonce');

			const realm = ipo.decode(realmBytes);
			integrityKey = new Uint8Array(await crypto.subtle.digest('MD5', iou.encode(`${proxy.username}:${realm}:${proxy.password}`)));
			authAttributes = [
				hnd(het.USERNAME, iou.encode(proxy.username)),
				hnd(het.REALM, iou.encode(realm)),
				hnd(het.NONCE, nonce)
			];

			const allocateRequest = await addTurnMessageIntegrity(createTurnStunMessage(
				hep.ALLOCATE_REQUEST,
				randomTurnTransactionId(),
				[
					hnd(het.REQUESTED_TRANSPORT, requestedTransport),
					...authAttributes
				]
			), integrityKey);
			const pipelinedMessages = await Promise.all([
				sign(createTurnStunMessage(hep.CREATE_PERMISSION_REQUEST, randomTurnTransactionId(), [peerAddress, ...authAttributes])),
				sign(createTurnStunMessage(hep.CONNECT_REQUEST, randomTurnTransactionId(), [peerAddress, ...authAttributes]))
			]);
			await writeTurnBytes(controlWriter, hot(allocateRequest, ...pipelinedMessages), 'TURN authenticated Allocate request timed out');
			turnResponse = await readTurnStunMessage(controlReader, bufferedData, 'TURN authenticated Allocate response timed out');
			message = turnResponse.message;
			bufferedData = turnResponse.extraData;
		} else if (message.type === hep.ALLOCATE_SUCCESS) {
			const pipelinedMessages = await Promise.all([
				sign(createTurnStunMessage(hep.CREATE_PERMISSION_REQUEST, randomTurnTransactionId(), [peerAddress, ...authAttributes])),
				sign(createTurnStunMessage(hep.CONNECT_REQUEST, randomTurnTransactionId(), [peerAddress, ...authAttributes]))
			]);
			if (pipelinedMessages.length) await writeTurnBytes(controlWriter, hot(...pipelinedMessages), 'TURN pipelined request timed out');
		}

		if (message.type !== hep.ALLOCATE_SUCCESS) {
			const errorCode = parseTurnErrorCode(message.attributes[het.ERROR_CODE]);
			throw new Error(errorCode ? `TURN Allocate failed with ${errorCode}` : 'TURN Allocate failed');
		}

		dataSocket = TCP连接({ hostname: turnHost, port: proxy.port });
		turnResponse = await readTurnStunMessage(controlReader, bufferedData, 'TURN CreatePermission response timed out');
		message = turnResponse.message;
		bufferedData = turnResponse.extraData;
		if (message.type !== hep.CREATE_PERMISSION_SUCCESS) throw new Error('TURN CreatePermission failed');

		turnResponse = await readTurnStunMessage(controlReader, bufferedData, 'TURN CONNECT response timed out');
		message = turnResponse.message;
		bufferedData = turnResponse.extraData;
		if (message.type !== hep.CONNECT_SUCCESS || !message.attributes[het.CONNECTION_ID]) throw new Error('TURN CONNECT failed');

		await hew(dataSocket.opened, hem, 'TURN data connection timed out');
		dataWriter = dataSocket.writable.getWriter();
		dataReader = dataSocket.readable.getReader();
		await writeTurnBytes(dataWriter, await sign(createTurnStunMessage(
			hep.CONNECTION_BIND_REQUEST,
			randomTurnTransactionId(),
			[
				hnd(het.CONNECTION_ID, message.attributes[het.CONNECTION_ID]),
				...authAttributes
			]
		)), 'TURN ConnectionBind request timed out');

		turnResponse = await readTurnStunMessage(dataReader, null, 'TURN ConnectionBind response timed out');
		message = turnResponse.message;
		const extraPayload = turnResponse.extraData;
		if (message.type !== hep.CONNECTION_BIND_SUCCESS) throw new Error('TURN ConnectionBind failed');

		controlWriter.releaseLock();
		controlWriter = null;
		controlReader.releaseLock();
		controlReader = null;
		dataWriter.releaseLock();
		dataWriter = null;

		const readable = new ReadableStream({
			start(controller) {
				if (extraPayload?.byteLength) controller.enqueue(extraPayload);
			},
			pull(controller) {
				return dataReader.read().then(({ done, value }) => {
					if (done) {
						releaseDataReader();
						controller.close();
					} else if (value?.byteLength) controller.enqueue(new Uint8Array(value));
				});
			},
			cancel() {
				try { dataReader?.cancel?.() } catch (e) { }
				releaseDataReader();
				close();
			}
		});

		return { readable, writable: dataSocket.writable, closed: dataSocket.closed, close };
	} catch (error) {
		try { controlWriter?.releaseLock?.() } catch (e) { }
		try { controlReader?.releaseLock?.() } catch (e) { }
		try { dataWriter?.releaseLock?.() } catch (e) { }
		releaseDataReader();
		close();
		throw error;
	}
}
//////////////////////////////////////////////////sstpConnect///////////////////////////////////////////////
const SSTP_TCP_MSS = 1400;
const SSTP_EMPTY_BYTES = new Uint8Array(0);

function readSstpUint16(bytes, offset = 0) {
	return (bytes[offset] << 8) | bytes[offset + 1];
}

function readSstpUint32(bytes, offset = 0) {
	return ((bytes[offset] << 24) | (bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3]) >>> 0;
}

function randomSstpUint16() {
	return readSstpUint16(crypto.getRandomValues(new Uint8Array(2)));
}

function internetChecksum(bytes, offset, length) {
	let sum = 0;
	for (let index = offset; index < offset + length - 1; index += 2) sum += readSstpUint16(bytes, index);
	if (length & 1) sum += bytes[offset + length - 1] << 8;
	while (sum >> 16) sum = (sum & 0xffff) + (sum >> 16);
	return (~sum) & 0xffff;
}

async function sstpConnect(proxy, targetHost, targetPort, TCP连接) {
	proxy = { ...proxy, username: proxy.username ?? null, password: proxy.password ?? null };
	let bufferedBytes = SSTP_EMPTY_BYTES, pppIdentifier = 1, socket = null, reader = null, writer = null;
	let closedSettled = false, resolveClosed, rejectClosed;
	const closed = new Promise((resolve, reject) => {
		resolveClosed = resolve;
		rejectClosed = reject;
	});
	const settleClosed = (settle, value) => {
		if (closedSettled) return;
		closedSettled = true;
		settle(value);
	};
	const close = () => {
		try { reader?.cancel?.().catch?.(() => { }) } catch (e) { }
		try { reader?.releaseLock?.() } catch (e) { }
		try { writer?.close?.().catch?.(() => { }) } catch (e) { }
		try { writer?.releaseLock?.() } catch (e) { }
		try { socket?.close?.() } catch (e) { }
		settleClosed(resolveClosed);
	};

	const readSocketChunk = async () => {
		const { value, done } = await reader.read();
		if (done || !value) throw new Error('SSTP socket closed');
		return hog(value);
	};
	const readBytes = async length => {
		while (bufferedBytes.byteLength < length) {
			const chunk = await readSocketChunk();
			bufferedBytes = bufferedBytes.byteLength ? hot(bufferedBytes, chunk) : chunk;
		}
		const result = bufferedBytes.subarray(0, length);
		bufferedBytes = bufferedBytes.subarray(length);
		return result;
	};
	const readHttpLine = async () => {
		for (; ;) {
			const lineEnd = bufferedBytes.indexOf(10);
			if (lineEnd >= 0) {
				const line = ipo.decode(bufferedBytes.subarray(0, lineEnd));
				bufferedBytes = bufferedBytes.subarray(lineEnd + 1);
				return line.replace(/\r$/, '');
			}
			const chunk = await readSocketChunk();
			bufferedBytes = bufferedBytes.byteLength ? hot(bufferedBytes, chunk) : chunk;
		}
	};
	const readPacket = async (timeoutMs = hem) => {
		const header = await hew(readBytes(4), timeoutMs, 'SSTP read timeout');
		const length = readSstpUint16(header, 2) & 0x0fff;
		if (length < 4) throw new Error('Invalid SSTP packet length');
		return {
			isControl: (header[1] & 1) !== 0,
			body: length > 4 ? await hew(readBytes(length - 4), timeoutMs, 'SSTP packet body read timeout') : SSTP_EMPTY_BYTES
		};
	};
	const buildSstpDataPacket = pppFrame => {
		const packetLength = 6 + pppFrame.byteLength;
		const packet = new Uint8Array(packetLength);
		packet.set([0x10, 0x00, ((packetLength >> 8) & 0x0f) | 0x80, packetLength & 0xff, 0xff, 0x03]);
		packet.set(pppFrame, 6);
		return packet;
	};
	const buildPppConfigurePacket = (protocol, code, id, options = []) => {
		const optionsLength = options.reduce((size, option) => size + 2 + option.data.byteLength, 0);
		const frame = new Uint8Array(6 + optionsLength);
		const view = new DataView(frame.buffer);
		view.setUint16(0, protocol);
		frame[2] = code;
		frame[3] = id;
		view.setUint16(4, 4 + optionsLength);
		options.reduce((offset, option) => {
			frame[offset] = option.type;
			frame[offset + 1] = 2 + option.data.byteLength;
			frame.set(option.data, offset + 2);
			return offset + 2 + option.data.byteLength;
		}, 6);
		return frame;
	};
	const parsePPPFrame = data => {
		const offset = data.byteLength >= 2 && data[0] === 0xff && data[1] === 0x03 ? 2 : 0;
		if (data.byteLength - offset < 4) return null;
		const protocol = readSstpUint16(data, offset);
		if (protocol === 0x0021) return { protocol, ipPacket: data.subarray(offset + 2) };
		if (data.byteLength - offset < 6) return null;
		return { protocol, code: data[offset + 2], id: data[offset + 3], payload: data.subarray(offset + 6), rawPacket: data.subarray(offset) };
	};
	const parsePppOptions = data => {
		const options = [];
		for (let offset = 0; offset + 2 <= data.byteLength;) {
			const type = data[offset];
			const length = data[offset + 1];
			if (length < 2 || offset + length > data.byteLength) break;
			options.push({ type, data: data.subarray(offset + 2, offset + length) });
			offset += length;
		}
		return options;
	};

	try {
		const serverHost = hap(proxy.hostname);
		const serverPort = proxy.port;
		socket = TCP连接({ hostname: serverHost, port: serverPort }, { secureTransport: 'on', allowHalfOpen: false });
		await hew(socket.opened, hem, 'SSTP server connection timed out');
		reader = socket.readable.getReader();
		writer = socket.writable.getWriter();

		const displayHost = serverHost.includes(':') ? `[${serverHost}]` : serverHost;
		const httpRequest = iou.encode(
			`SSTP_DUPLEX_POST /sra_{BA195980-CD49-458b-9E23-C84EE0ADCD75}/ HTTP/1.1\r\n`
			+ `Host: ${Number(serverPort) === 443 ? displayHost : `${displayHost}:${serverPort}`}\r\n`
			+ 'Content-Length: 18446744073709551615\r\n'
			+ `SSTPCORRELATIONID: {${crypto.randomUUID()}}\r\n\r\n`
		);
		const encapsulatedProtocol = new Uint8Array(2);
		new DataView(encapsulatedProtocol.buffer).setUint16(0, 1);
		const maximumReceiveUnit = new Uint8Array(2);
		new DataView(maximumReceiveUnit.buffer).setUint16(0, 1500);
		const sstpConnectRequest = new Uint8Array(12 + encapsulatedProtocol.byteLength);
		const sstpConnectView = new DataView(sstpConnectRequest.buffer);
		sstpConnectRequest[0] = 0x10;
		sstpConnectRequest[1] = 0x01;
		sstpConnectView.setUint16(2, sstpConnectRequest.byteLength | 0x8000);
		sstpConnectView.setUint16(4, 0x0001);
		sstpConnectView.setUint16(6, 1);
		sstpConnectRequest[9] = 1;
		sstpConnectView.setUint16(10, 4 + encapsulatedProtocol.byteLength);
		sstpConnectRequest.set(encapsulatedProtocol, 12);

		await hew(writer.write(hot(
			httpRequest,
			sstpConnectRequest,
			buildSstpDataPacket(buildPppConfigurePacket(0xc021, 1, pppIdentifier++, [
				{ type: 1, data: maximumReceiveUnit }
			]))
		)), hem, 'SSTP HTTP handshake request timed out');

		const statusLine = await hew(readHttpLine(), hem, 'SSTP HTTP handshake timed out');
		for (; ;) {
			const line = await hew(readHttpLine(), hem, 'SSTP HTTP header read timed out');
			if (line === '') break;
		}
		if (!/HTTP\/\d(?:\.\d)?\s+2\d\d/i.test(statusLine)) throw new Error(`SSTP HTTP handshake failed: ${statusLine || 'invalid status'}`);

		let localLcpAcked = false, peerLcpAcked = false, papRequired = false, papSent = false, papDone = false, ipcpStarted = false, ipcpFinished = false, sourceIp = null;
		const sendPapIfReady = async () => {
			if (!localLcpAcked || !peerLcpAcked || !papRequired || papSent) return;
			if (proxy.username === null || proxy.password === null) throw new Error('SSTP server requires PAP authentication');
			const username = iou.encode(proxy.username);
			const password = iou.encode(proxy.password);
			if (username.byteLength > 255 || password.byteLength > 255) throw new Error('SSTP username/password is too long');
			const papLength = 6 + username.byteLength + password.byteLength;
			const frame = new Uint8Array(2 + papLength);
			const view = new DataView(frame.buffer);
			view.setUint16(0, 0xc023);
			frame[2] = 1;
			frame[3] = pppIdentifier++;
			view.setUint16(4, papLength);
			frame[6] = username.byteLength;
			frame.set(username, 7);
			frame[7 + username.byteLength] = password.byteLength;
			frame.set(password, 8 + username.byteLength);
			await hew(writer.write(buildSstpDataPacket(frame)), hem, 'SSTP PAP authentication request timed out');
			papSent = true;
		};
		const startIpcpIfReady = async () => {
			if (!localLcpAcked || !peerLcpAcked || ipcpStarted || (papRequired && !papDone)) return;
			await hew(writer.write(buildSstpDataPacket(buildPppConfigurePacket(0x8021, 1, pppIdentifier++, [
				{ type: 3, data: new Uint8Array(4) }
			]))), hem, 'SSTP IPCP request timed out');
			ipcpStarted = true;
		};

		for (let round = 0; round < 50 && !ipcpFinished; round++) {
			const packet = await readPacket(hem);
			if (packet.isControl) continue;
			const ppp = parsePPPFrame(packet.body);
			if (!ppp) continue;

			if (ppp.protocol === 0xc021) {
				if (ppp.code === 1) {
					const authOption = parsePppOptions(ppp.payload).find(option => option.type === 3);
					if (authOption?.data?.byteLength >= 2) {
						const authProtocol = readSstpUint16(authOption.data);
						if (authProtocol !== 0xc023) throw new Error(`SSTP unsupported PPP authentication protocol: 0x${authProtocol.toString(16)}`);
						papRequired = true;
					}
					const ack = new Uint8Array(ppp.rawPacket);
					ack[2] = 2;
					await hew(writer.write(buildSstpDataPacket(ack)), hem, 'SSTP LCP Configure-Ack timed out');
					peerLcpAcked = true;
					await sendPapIfReady();
					await startIpcpIfReady();
				} else if (ppp.code === 2) {
					localLcpAcked = true;
					await sendPapIfReady();
					await startIpcpIfReady();
				}
				continue;
			}

			if (ppp.protocol === 0xc023) {
				if (ppp.code === 2) {
					papDone = true;
					await startIpcpIfReady();
				} else if (ppp.code === 3) throw new Error('SSTP PAP authentication failed');
				continue;
			}

			if (ppp.protocol === 0x8021) {
				if (ppp.code === 1) {
					const ack = new Uint8Array(ppp.rawPacket);
					ack[2] = 2;
					await hew(writer.write(buildSstpDataPacket(ack)), hem, 'SSTP IPCP Configure-Ack timed out');
					await startIpcpIfReady();
				} else if (ppp.code === 3) {
					const addressOption = parsePppOptions(ppp.payload).find(option => option.type === 3);
					if (addressOption?.data?.byteLength === 4) {
						sourceIp = [...addressOption.data].join('.');
						await hew(writer.write(buildSstpDataPacket(buildPppConfigurePacket(0x8021, 1, pppIdentifier++, [
							{ type: 3, data: addressOption.data }
						]))), hem, 'SSTP IPCP address request timed out');
						ipcpStarted = true;
					}
				} else if (ppp.code === 2) {
					const addressOption = parsePppOptions(ppp.payload).find(option => option.type === 3);
					if (addressOption?.data?.byteLength === 4) sourceIp = [...addressOption.data].join('.');
					ipcpFinished = true;
				}
			}
		}
		if (!sourceIp) throw new Error('SSTP did not assign an IPv4 address');

		const target = hap(targetHost);
		/** @type {string | null} */
		let targetIp = hin(target) ? target : null;
		if (!targetIp) {
			const records = await ado(target, 'A');
			const recordData = records.find(item => item.type === 1 && hin(item.data))?.data;
			targetIp = typeof recordData === 'string' ? recordData : null;
		}
		if (!targetIp) throw new Error(`Could not resolve ${targetHost} to an IPv4 address for SSTP`);

		const sourcePort = 10000 + (randomSstpUint16() % 50000);
		const sourceAddress = new Uint8Array(String(sourceIp || '').split('.').map(Number));
		const destinationAddress = new Uint8Array(String(targetIp || '').split('.').map(Number));
		let sequenceNumber = readSstpUint32(crypto.getRandomValues(new Uint8Array(4)));
		let acknowledgementNumber = 0;
		const ipHeaderTemplate = new Uint8Array(20);
		ipHeaderTemplate.set([0x45, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 64, 6]);
		ipHeaderTemplate.set(sourceAddress, 12);
		ipHeaderTemplate.set(destinationAddress, 16);
		const tcpPseudoHeader = new Uint8Array(1432);
		tcpPseudoHeader.set(sourceAddress);
		tcpPseudoHeader.set(destinationAddress, 4);
		tcpPseudoHeader[9] = 6;
		const buildTcpFrame = (flags, payload = SSTP_EMPTY_BYTES) => {
			const bytes = hog(payload);
			const payloadLength = bytes.byteLength;
			const tcpLength = 20 + payloadLength;
			const ipLength = 20 + tcpLength;
			const sstpLength = 8 + ipLength;
			const frame = new Uint8Array(sstpLength);
			const view = new DataView(frame.buffer);
			frame.set([0x10, 0x00, ((sstpLength >> 8) & 0x0f) | 0x80, sstpLength & 0xff, 0xff, 0x03, 0x00, 0x21]);
			frame.set(ipHeaderTemplate, 8);
			view.setUint16(10, ipLength);
			view.setUint16(12, randomSstpUint16());
			view.setUint16(18, internetChecksum(frame, 8, 20));
			view.setUint16(28, sourcePort);
			view.setUint16(30, targetPort);
			view.setUint32(32, sequenceNumber);
			view.setUint32(36, acknowledgementNumber);
			frame[40] = 0x50;
			frame[41] = flags;
			view.setUint16(42, 65535);
			if (payloadLength) frame.set(bytes, 48);
			tcpPseudoHeader[10] = tcpLength >> 8;
			tcpPseudoHeader[11] = tcpLength & 0xff;
			tcpPseudoHeader.set(frame.subarray(28, 28 + tcpLength), 12);
			view.setUint16(44, internetChecksum(tcpPseudoHeader, 0, 12 + tcpLength));
			return frame;
		};
		const matchIncomingIpPacket = ipPacket => {
			if (ipPacket.byteLength < 40 || ipPacket[9] !== 6) return null;
			const ipHeaderLength = (ipPacket[0] & 0x0f) * 4;
			if (ipPacket.byteLength < ipHeaderLength + 20) return null;
			if (readSstpUint16(ipPacket, ipHeaderLength) !== targetPort) return null;
			if (readSstpUint16(ipPacket, ipHeaderLength + 2) !== sourcePort) return null;
			return {
				flags: ipPacket[ipHeaderLength + 13],
				sequence: readSstpUint32(ipPacket, ipHeaderLength + 4),
				payloadOffset: ipHeaderLength + ((ipPacket[ipHeaderLength + 12] >> 4) & 0x0f) * 4
			};
		};

		await hew(writer.write(buildTcpFrame(0x02)), hem, 'SSTP TCP SYN write timed out');
		sequenceNumber = (sequenceNumber + 1) >>> 0;
		let tcpReady = false;
		for (let attempt = 0; attempt < 30; attempt++) {
			const packet = await readPacket(hem);
			if (packet.isControl) continue;
			const ppp = parsePPPFrame(packet.body);
			if (!ppp || ppp.protocol !== 0x0021) continue;
			const tcp = matchIncomingIpPacket(ppp.ipPacket);
			if (!tcp || (tcp.flags & 0x12) !== 0x12) continue;
			acknowledgementNumber = (tcp.sequence + 1) >>> 0;
			await hew(writer.write(buildTcpFrame(0x10)), hem, 'SSTP TCP ACK write timed out');
			tcpReady = true;
			break;
		}
		if (!tcpReady) throw new Error('TCP handshake through SSTP timed out');

		/** @type {ReadableStreamDefaultController<Uint8Array> | null} */
		let streamController = null;
		const readable = new ReadableStream({
			start(controller) {
				streamController = controller;
			},
			cancel() {
				close();
			}
		});

		(async () => {
			try {
				let pendingChunks = [], pendingLength = 0;
				const flush = () => {
					if (!pendingLength) return;
					if (!streamController) throw new Error('SSTP readable stream is not ready');
					streamController.enqueue(pendingChunks.length === 1 ? pendingChunks[0] : hot(...pendingChunks));
					pendingChunks = [];
					pendingLength = 0;
					writer.write(buildTcpFrame(0x10)).catch(() => { });
				};

				for (; ;) {
					const packet = await readPacket(60000);
					if (packet.isControl) continue;
					const ppp = parsePPPFrame(packet.body);
					if (!ppp || ppp.protocol !== 0x0021) continue;
					const incoming = matchIncomingIpPacket(ppp.ipPacket);
					if (!incoming) continue;

					if (incoming.payloadOffset < ppp.ipPacket.byteLength) {
						const payload = ppp.ipPacket.subarray(incoming.payloadOffset);
						if (payload.byteLength) {
							acknowledgementNumber = (incoming.sequence + payload.byteLength) >>> 0;
							pendingChunks.push(new Uint8Array(payload));
							pendingLength += payload.byteLength;
						}
					}

					if (incoming.flags & 0x01) {
						flush();
						acknowledgementNumber = (acknowledgementNumber + 1) >>> 0;
						writer.write(buildTcpFrame(0x11)).catch(() => { });
						const controller = streamController;
						if (controller) {
							try { controller.close() } catch (e) { }
						}
						close();
						return;
					}

					if (bufferedBytes.byteLength < 4 || pendingLength >= 32768) flush();
				}
			} catch (error) {
				const controller = streamController;
				if (controller) {
					try { controller.error(error) } catch (e) { }
				}
				settleClosed(rejectClosed, error);
				try { socket?.close?.() } catch (e) { }
			}
		})();

		const writable = new WritableStream({
			async write(chunk) {
				const bytes = hog(chunk);
				if (!bytes.byteLength) return;
				if (bytes.byteLength <= SSTP_TCP_MSS) {
					await writer.write(buildTcpFrame(0x18, bytes));
					sequenceNumber = (sequenceNumber + bytes.byteLength) >>> 0;
					return;
				}
				const frames = [];
				for (let offset = 0; offset < bytes.byteLength; offset += SSTP_TCP_MSS) {
					const segment = bytes.subarray(offset, Math.min(offset + SSTP_TCP_MSS, bytes.byteLength));
					frames.push(buildTcpFrame(0x18, segment));
					sequenceNumber = (sequenceNumber + segment.byteLength) >>> 0;
				}
				await writer.write(hot(...frames));
			},
			close() {
				return writer.write(buildTcpFrame(0x11)).catch(() => { });
			},
			abort(error) {
				close();
				if (error) settleClosed(rejectClosed, error);
			}
		});

		return { readable, writable, closed, close };
	} catch (error) {
		close();
		throw error;
	}
}
//////////////////////////////////////////////////功能性函数///////////////////////////////////////////////
/**
 * 带秘钥的 Base64 编码
 * @param {string} plaintext - 原始明文字符串
 * @param {string} secret - 秘钥字符串（如 "KEY123"）
 * @returns {string} 经过秘钥处理的 Base64 字符串
 */
function base64SecretEncode(plaintext, secret) {
	const encoder = new TextEncoder();
	const data = encoder.encode(plaintext);
	const key = encoder.encode(secret);
	const mixed = new Uint8Array(data.length);

	for (let i = 0; i < data.length; i++) {
		mixed[i] = data[i] ^ key[i % key.length];
	}

	// 将 Uint8Array 转换为可被 btoa 处理的字符串
	let binary = '';
	for (let i = 0; i < mixed.length; i++) {
		binary += String.fromCharCode(mixed[i]);
	}
	return btoa(binary);
}
function bar(bat, bay) {
	const bbl = atob(bat);
	const bce = new Uint8Array(bbl.length);
	for (let i = 0; i < bbl.length; i++) {
		bce[i] = bbl.charCodeAt(i);
	}

	const bed = new TextEncoder();
	const bee = bed.encode(bay);
	const beg = new Uint8Array(bce.length);

	for (let i = 0; i < bce.length; i++) {
		beg[i] = bce[i] ^ bee[i % bee.length];
	}

	const bel = new TextDecoder();
	return bel.decode(beg);
}
function 获取传输协议配置(配置 = {}) {
	const 是gRPC = 配置.传输协议 === 'grpc';
	const [本机标识头, 本机标识键] = 获取本机标识(配置.UUID);
	const 叉混淆JSON = {
		"xPaddingObfsMode": true,
		"xPaddingMethod": "tokenish",
		"xPaddingPlacement": "queryInHeader",
		"xPaddingHeader": 本机标识头,
		"xPaddingKey": 本机标识键
	};
	return {
		type: 是gRPC ? (配置.gRPC模式 === 'multi' ? 'grpc&mode=multi' : 'grpc&mode=gun') : (配置.传输协议 === 'xhttp' ? `xhttp&mode=stream-one&extra=${encodeURIComponent(JSON.stringify(叉混淆JSON))}` : 'ws'),
		路径字段名: 是gRPC ? 'serviceName' : 'path',
		域名字段名: 是gRPC ? 'authority' : 'host'
	};
}

function 获取传输路径参数值(配置 = {}, 节点路径 = '/', 作为优选订阅生成器 = false) {
	const 路径值 = 作为优选订阅生成器 ? '/' : (配置.fume ? fizz(节点路径) : 节点路径);
	if (配置.传输协议 !== 'grpc') return 路径值;
	return 路径值.split('?')[0] || '/';
}

function log(...args) {
	if (fun) console.log(...args);
}

function Clash订阅配置文件热补丁(Clash_原始订阅内容, config_JSON = {}) {
	const uuid = config_JSON?.UUID || null;
	const ECH启用 = Boolean(config_JSON?.ECH);
	const HOSTS = Array.isArray(config_JSON?.HOSTS) ? [...config_JSON.HOSTS] : [];
	const ECH_SNI = config_JSON?.ECHConfig?.SNI || null;
	const ECH_DNS = config_JSON?.ECHConfig?.DNS;
	const 需要处理ECH = Boolean(uuid && ECH启用);
	const gRPCUserAgent = (typeof config_JSON?.gRPCUserAgent === 'string' && config_JSON.gRPCUserAgent.trim()) ? config_JSON.gRPCUserAgent.trim() : null;
	const 需要处理gRPC = config_JSON?.传输协议 === "grpc" && Boolean(gRPCUserAgent);
	const gRPCUserAgentYAML = gRPCUserAgent ? JSON.stringify(gRPCUserAgent) : null;
	let clash_yaml = Clash_原始订阅内容.replace(/mode:\s*Rule\b/g, 'mode: rule');

	const baseDnsBlock = `dns:
  enable: true
  default-nameserver:
    - 223.5.5.5
    - 119.29.29.29
    - 114.114.114.114
  use-hosts: true
  nameserver:
    - https://sm2.doh.pub/dns-query
    - https://dns.alidns.com/dns-query
  fallback:
    - 8.8.4.4
    - 208.67.220.220
  fallback-filter:
    geoip: true
    geoip-code: CN
    ipcidr:
      - 240.0.0.0/4
      - 127.0.0.1/32
      - 0.0.0.0/32
    domain:
      - '+.google.com'
      - '+.facebook.com'
      - '+.youtube.com'
`;

	const 添加InlineGrpcUserAgent = (text) => text.replace(/grpc-opts:\s*\{([\s\S]*?)\}/i, (all, inner) => {
		if (/grpc-user-agent\s*:/i.test(inner)) return all;
		let content = inner.trim();
		if (content.endsWith(',')) content = content.slice(0, -1).trim();
		const patchedContent = content ? `${content}, grpc-user-agent: ${gRPCUserAgentYAML}` : `grpc-user-agent: ${gRPCUserAgentYAML}`;
		return `grpc-opts: {${patchedContent}}`;
	});
	const 匹配到gRPC网络 = (text) => /(?:^|[,{])\s*network:\s*(?:"grpc"|'grpc'|grpc)(?=\s*(?:[,}\n#]|$))/mi.test(text);
	const 获取代理类型 = (nodeText) => nodeText.match(/type:\s*(\w+)/)?.[1] || 'vl' + 'ess';
	const 获取凭据值 = (nodeText, isFlowStyle) => {
		const credentialField = 获取代理类型(nodeText) === 'trojan' ? 'password' : 'uuid';
		const pattern = new RegExp(`${credentialField}:\\s*${isFlowStyle ? '([^,}\\n]+)' : '([^\\n]+)'}`);
		return nodeText.match(pattern)?.[1]?.trim() || null;
	};
	const 插入NameserverPolicy = (yaml, hostsEntries) => {
		if (/^\s{2}nameserver-policy:\s*(?:\n|$)/m.test(yaml)) {
			return yaml.replace(/^(\s{2}nameserver-policy:\s*\n)/m, `$1${hostsEntries}\n`);
		}
		const lines = yaml.split('\n');
		let dnsBlockEndIndex = -1;
		let inDnsBlock = false;
		for (let i = 0; i < lines.length; i++) {
			const line = lines[i];
			if (/^dns:\s*$/.test(line)) {
				inDnsBlock = true;
				continue;
			}
			if (inDnsBlock && /^[a-zA-Z]/.test(line)) {
				dnsBlockEndIndex = i;
				break;
			}
		}
		const nameserverPolicyBlock = `  nameserver-policy:\n${hostsEntries}`;
		if (dnsBlockEndIndex !== -1) lines.splice(dnsBlockEndIndex, 0, nameserverPolicyBlock);
		else lines.push(nameserverPolicyBlock);
		return lines.join('\n');
	};
	const 添加Flow格式gRPCUserAgent = (nodeText) => {
		if (!匹配到gRPC网络(nodeText) || /grpc-user-agent\s*:/i.test(nodeText)) return nodeText;
		if (/grpc-opts:\s*\{/i.test(nodeText)) return 添加InlineGrpcUserAgent(nodeText);
		return nodeText.replace(/\}(\s*)$/, `, grpc-opts: {grpc-user-agent: ${gRPCUserAgentYAML}}}$1`);
	};
	const 添加Block格式gRPCUserAgent = (nodeLines, topLevelIndent) => {
		const 顶级缩进 = ' '.repeat(topLevelIndent);
		let grpcOptsIndex = -1;
		for (let idx = 0; idx < nodeLines.length; idx++) {
			const line = nodeLines[idx];
			if (!line.trim()) continue;
			const indent = line.search(/\S/);
			if (indent !== topLevelIndent) continue;
			if (/^\s*grpc-opts:\s*(?:#.*)?$/.test(line) || /^\s*grpc-opts:\s*\{.*\}\s*(?:#.*)?$/.test(line)) {
				grpcOptsIndex = idx;
				break;
			}
		}
		if (grpcOptsIndex === -1) {
			let insertIndex = -1;
			for (let j = nodeLines.length - 1; j >= 0; j--) {
				if (nodeLines[j].trim()) {
					insertIndex = j;
					break;
				}
			}
			if (insertIndex >= 0) nodeLines.splice(insertIndex + 1, 0, `${顶级缩进}grpc-opts:`, `${顶级缩进}  grpc-user-agent: ${gRPCUserAgentYAML}`);
			return nodeLines;
		}
		const grpcLine = nodeLines[grpcOptsIndex];
		if (/^\s*grpc-opts:\s*\{.*\}\s*(?:#.*)?$/.test(grpcLine)) {
			if (!/grpc-user-agent\s*:/i.test(grpcLine)) nodeLines[grpcOptsIndex] = 添加InlineGrpcUserAgent(grpcLine);
			return nodeLines;
		}
		let blockEndIndex = nodeLines.length;
		let 子级缩进 = topLevelIndent + 2;
		let 已有gRPCUserAgent = false;
		for (let idx = grpcOptsIndex + 1; idx < nodeLines.length; idx++) {
			const line = nodeLines[idx];
			const trimmed = line.trim();
			if (!trimmed) continue;
			const indent = line.search(/\S/);
			if (indent <= topLevelIndent) {
				blockEndIndex = idx;
				break;
			}
			if (indent > topLevelIndent && 子级缩进 === topLevelIndent + 2) 子级缩进 = indent;
			if (/^grpc-user-agent\s*:/.test(trimmed)) {
				已有gRPCUserAgent = true;
				break;
			}
		}
		if (!已有gRPCUserAgent) nodeLines.splice(blockEndIndex, 0, `${' '.repeat(子级缩进)}grpc-user-agent: ${gRPCUserAgentYAML}`);
		return nodeLines;
	};
	const 添加Block格式ECHOpts = (nodeLines, topLevelIndent) => {
		let insertIndex = -1;
		for (let j = nodeLines.length - 1; j >= 0; j--) {
			if (nodeLines[j].trim()) {
				insertIndex = j;
				break;
			}
		}
		if (insertIndex < 0) return nodeLines;
		const indent = ' '.repeat(topLevelIndent);
		const echOptsLines = [`${indent}ech-opts:`, `${indent}  enable: true`];
		if (ECH_SNI) echOptsLines.push(`${indent}  query-server-name: ${ECH_SNI}`);
		nodeLines.splice(insertIndex + 1, 0, ...echOptsLines);
		return nodeLines;
	};

	if (!/^dns:\s*(?:\n|$)/m.test(clash_yaml)) clash_yaml = baseDnsBlock + clash_yaml;
	if (ECH_SNI && !HOSTS.includes(ECH_SNI)) HOSTS.push(ECH_SNI);

	if (ECH启用 && HOSTS.length > 0) {
		const hostsEntries = HOSTS.map(host => `    "${host}": ${ECH_DNS ? ECH_DNS : ''}`).join('\n');
		clash_yaml = 插入NameserverPolicy(clash_yaml, hostsEntries);
	}

	if (!需要处理ECH && !需要处理gRPC) return clash_yaml;

	const lines = clash_yaml.split('\n');
	const processedLines = [];
	let i = 0;

	while (i < lines.length) {
		const line = lines[i];
		const trimmedLine = line.trim();

		if (trimmedLine.startsWith('- {')) {
			let fullNode = line;
			let braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
			while (braceCount > 0 && i + 1 < lines.length) {
				i++;
				fullNode += '\n' + lines[i];
				braceCount += (lines[i].match(/\{/g) || []).length - (lines[i].match(/\}/g) || []).length;
			}
			if (需要处理gRPC) fullNode = 添加Flow格式gRPCUserAgent(fullNode);
			if (需要处理ECH && 获取凭据值(fullNode, true) === uuid.trim()) {
				fullNode = fullNode.replace(/\}(\s*)$/, `, ech-opts: {enable: true${ECH_SNI ? `, query-server-name: ${ECH_SNI}` : ''}}}$1`);
			}
			processedLines.push(fullNode);
			i++;
		} else if (trimmedLine.startsWith('- name:')) {
			let nodeLines = [line];
			let baseIndent = line.search(/\S/);
			let topLevelIndent = baseIndent + 2;
			i++;
			while (i < lines.length) {
				const nextLine = lines[i];
				const nextTrimmed = nextLine.trim();
				if (!nextTrimmed) {
					nodeLines.push(nextLine);
					i++;
					break;
				}
				const nextIndent = nextLine.search(/\S/);
				if (nextIndent <= baseIndent && nextTrimmed.startsWith('- ')) {
					break;
				}
				if (nextIndent < baseIndent && nextTrimmed) {
					break;
				}
				nodeLines.push(nextLine);
				i++;
			}
			let nodeText = nodeLines.join('\n');
			if (需要处理gRPC && 匹配到gRPC网络(nodeText)) {
				nodeLines = 添加Block格式gRPCUserAgent(nodeLines, topLevelIndent);
				nodeText = nodeLines.join('\n');
			}
			if (需要处理ECH && 获取凭据值(nodeText, false) === uuid.trim()) nodeLines = 添加Block格式ECHOpts(nodeLines, topLevelIndent);
			processedLines.push(...nodeLines);
		} else {
			processedLines.push(line);
			i++;
		}
	}

	return processedLines.join('\n');
}

async function ga(gb, gc = {}) {
	const gd = gc?.UUID || null;
	const ge = gc?.Fingerprint || "chrome";
	const gi = Boolean(gc?.ECH);
	const gm = gc?.ECHConfig?.SNI || "cloudflare-ech.com";
	const go = gb.replace('1.1.1.1', '8.8.8.8').replace('1.0.0.1', '8.8.4.4');
	try {
		const gp = JSON.parse(go);
		const gu = gy => gy === undefined || gy === null ? [] : (Array.isArray(gy) ? gy : [gy]);
		const gab = () => gp.route = gp.route && typeof gp.route === 'object' ? gp.route : {};
		const gad = gag => gag && typeof gag === 'object' && !Array.isArray(gag) && typeof gag.server === 'string' ? gag.server : null;
		const gal = (gam, gao) => {
			if (!gao || typeof gao !== 'string') return null;
			const gap = gab(), tag = `${gam}-${gao}`, gar = Array.isArray(gap.rule_set) ? gap.rule_set : gu(gap.rule_set);
			if (!gar.some(gas => gas?.tag === tag)) {
				const gat = gam === 'geoip' ? gap.geoip : gap.geosite;
				gar.push({ tag, type: 'remote', format: 'binary', url: `https://raw.githubusercontent.com/SagerNet/sing-${gam}/rule-set/${tag}.srs`, ...(gat?.download_detour ? { download_detour: gat.download_detour } : {}) });
				gp.experimental = gp.experimental && typeof gp.experimental === 'object' ? gp.experimental : {};
				gp.experimental.cache_file = gp.experimental.cache_file && typeof gp.experimental.cache_file === 'object' ? gp.experimental.cache_file : {};
				gp.experimental.cache_file.enabled ??= true;
			}
			gap.rule_set = gar;
			return tag;
		};

		const gay = gca => {
			if (!gca || typeof gca !== 'object' || Array.isArray(gca)) return gca;
			if (gca.type === 'logical' && Array.isArray(gca.rules)) {
				gca.rules = gca.rules.map(gay);
				return gca;
			}
			const gdp = [];
			for (const geb of gu(gca.geoip)) {
				if (typeof geb !== 'string') continue;
				if (geb.toLowerCase() === 'private') gca.ip_is_private = true;
				else gdp.push(gal('geoip', geb));
			}
			for (const gee of gu(gca.source_geoip)) {
				if (typeof gee !== 'string') continue;
				gdp.push(gal('geoip', gee));
				gca.rule_set_ip_cidr_match_source = true;
			}
			for (const gel of gu(gca.geosite)) if (typeof gel === 'string') gdp.push(gal('geosite', gel));
			if (gdp.length) gca.rule_set = [...new Set([...gu(gca.rule_set), ...gdp].filter(Boolean))];
			delete gca.geoip;
			delete gca.source_geoip;
			delete gca.geosite;
			return gca;
		};

		const gem = (gen, ghb) => {
			gen = gay(gen);
			if (!gen || typeof gen !== 'object' || Array.isArray(gen)) return gen;
			if (gen.type === 'logical' && Array.isArray(gen.rules)) {
				gen.rules = gen.rules.map(ghq => gem(ghq, ghb));
				return gen;
			}
			const ghz = gad(gen);
			if (ghz && ghb.has(ghz)) {
				for (const gia of ['server', 'strategy', 'disable_cache', 'rewrite_ttl', 'client_subnet', 'timeout']) delete gen[gia];
				gen.action = 'predefined';
				gen.rcode = ghb.get(ghz);
			} else if (ghz && !gen.action) gen.action = 'route';
			return gen;
		};

		if (Array.isArray(gp.inbounds)) {
			for (const gib of gp.inbounds) {
				if (!gib || typeof gib !== 'object' || gib.type !== 'tun') continue;
				for (const gig of [
					{ targetKey: 'address', sourceKeys: ['inet4_address', 'inet6_address'] },
					{ targetKey: 'route_address', sourceKeys: ['inet4_route_address', 'inet6_route_address'] },
					{ targetKey: 'route_exclude_address', sourceKeys: ['inet4_route_exclude_address', 'inet6_route_exclude_address'] }
				]) {
					const gin = gu(gib[gig.targetKey]);
					for (const gip of gig.sourceKeys) gin.push(...gu(gib[gip]));
					if (gin.length) gib[gig.targetKey] = [...new Set(gin)];
					for (const sourceKey of gig.sourceKeys) delete gib[sourceKey];
				}
				if (gib.tag) {
					const gmt = [];
					if (gib.domain_strategy) gmt.push({ inbound: gib.tag, action: 'resolve', strategy: gib.domain_strategy });
					if (gib.sniff) {
						const sniffRule = { inbound: gib.tag, action: 'sniff' };
						if (gib.sniff_timeout) sniffRule.timeout = gib.sniff_timeout;
						gmt.push(sniffRule);
					}
					if (gmt.length) {
						const gnp = gab();
						gnp.rules = [...gmt, ...gu(gnp.rules)];
					}
				}
				delete gib.sniff;
				delete gib.sniff_timeout;
				delete gib.domain_strategy;
			}
		}

		if (gp?.route && typeof gp.route === 'object' && Array.isArray(gp.route.rules)) {
			const gur = gut => {
				gut = gay(gut);
				if (gut?.type === 'logical' && Array.isArray(gut.rules)) gut.rules = gut.rules.map(gur);
				else if (gut && typeof gut === 'object' && !Array.isArray(gut) && gut.outbound && !gut.action) gut.action = 'route';
				return gut;
			};
			gp.route.rules = gp.route.rules.map(gur);
		}

		const guy = gp?.dns;
		if (guy && typeof guy === 'object') {
			const gym = guy.fakeip && typeof guy.fakeip === 'object' ? guy.fakeip : null;
			const gyp = new Map();
			const ha = { 'tcp:': 'tcp', 'udp:': 'udp', 'tls:': 'tls', 'quic:': 'quic', 'https:': 'https', 'h3:': 'h3' };
			const hb = { success: 'NOERROR', format_error: 'FORMERR', server_failure: 'SERVFAIL', name_error: 'NXDOMAIN', not_implemented: 'NOTIMP', refused: 'REFUSED' };
			let he = false;

			if (Array.isArray(guy.servers)) {
				const hf = [];
				for (const hg of guy.servers) {
					if (!hg || typeof hg !== 'object' || Array.isArray(hg)) {
						hf.push(hg);
						continue;
					}

					const hi = { ...hg };
					let hl = null, hn = '', hm = typeof hi.address === 'string' ? hi.address.trim() : '';
					if (hm) {
						const ho = hm.toLowerCase();
						if (ho === 'fakeip') hl = { type: 'fakeip' };
						else if (ho === 'local') hl = { type: 'local' };
						else if (ho.startsWith('rcode://')) {
							hl = { type: 'rcode' };
							hn = hm.slice('rcode://'.length).toLowerCase();
						}
						else if (ho.startsWith('dhcp://')) {
							const hp = hm.slice('dhcp://'.length);
							hl = hp && hp.toLowerCase() !== 'auto' ? { type: 'dhcp', interface: hp } : { type: 'dhcp' };
						} else {
							try {
								const hq = new URL(hm);
								const hr = ha[hq.protocol.toLowerCase()];
								if (hr) {
									const hs = hq.hostname?.startsWith('[') && hq.hostname.endsWith(']') ? hq.hostname.slice(1, -1) : hq.hostname;
									hl = {
										type: hr,
										server: hs || hq.host || hm,
										...(hq.port ? { server_port: Number(hq.port) } : {}),
										...((hr === 'https' || hr === 'h3') && hq.pathname && hq.pathname !== '/dns-query' ? { path: hq.pathname } : {})
									};
								}
							} catch (_) { }
							if (!hl) hl = { type: 'udp', server: hm };
						}
					}

					if (hl?.type === 'rcode') {
						const hz = hb[hn] || 'NOERROR';
						if (typeof hi.tag === 'string' && hi.tag) {
							gyp.set(hi.tag, hz);
							gyp.set(hi.tag.startsWith('dns_') ? hi.tag.slice(4) : `dns_${hi.tag}`, hz);
						}
						continue;
					}

					if (hl) {
						delete hi.address;
						Object.assign(hi, hl);
					}
					if (hi.address_resolver !== undefined && hi.domain_resolver === undefined) hi.domain_resolver = hi.address_resolver;
					if (hi.address_strategy !== undefined && hi.domain_strategy === undefined) hi.domain_strategy = hi.address_strategy;
					delete hi.address_resolver;
					delete hi.address_strategy;
					if (hi.detour === 'DIRECT') delete hi.detour;

					if (hi.type === 'fakeip') {
						he = true;
						if (gym) {
							for (const hag of ['inet4_range', 'inet6_range']) {
								if (gym[hag] !== undefined && hi[hag] === undefined) hi[hag] = gym[hag];
							}
						}
					}
					hf.push(hi);
				}
				guy.servers = hf;
			}

			if (gym && !he && gym.enabled !== false) {
				const haj = { type: 'fakeip', tag: 'fakeip' };
				for (const ham of Array.isArray(guy.rules) ? guy.rules : []) {
					const han = gad(ham);
					if (han && han.toLowerCase().includes('fakeip')) {
						haj.tag = han;
						break;
					}
				}
				for (const hao of ['inet4_range', 'inet6_range']) {
					if (gym[hao] !== undefined) haj[hao] = gym[hao];
				}
				if (Array.isArray(guy.servers)) guy.servers.push(haj);
				else guy.servers = [haj];
			}

			if (Array.isArray(guy.rules)) {
				const gop = [];
				for (const goy of guy.rules) {
					const gpa = gad(goy);
					const gpo = gu(goy?.outbound);
					const gps = new Set(['outbound', 'server', 'action', 'strategy', 'disable_cache', 'rewrite_ttl', 'client_subnet', 'timeout']);
					const gsa = goy && typeof goy === 'object' && !Array.isArray(goy) && goy.type !== 'logical'
						&& gpa && gpo.includes('any') && Object.keys(goy).every(gsr => gps.has(gsr));
					if (gsa) {
						const gui = gab();
						if (gui.default_domain_resolver === undefined) {
							const gum = { server: gpa };
							for (const gun of ['strategy', 'disable_cache', 'rewrite_ttl', 'client_subnet', 'timeout']) {
								if (goy[gun] !== undefined) gum[gun] = goy[gun];
							}
							gui.default_domain_resolver = Object.keys(gum).length === 1 ? gum.server : gum;
						}
						continue;
					}
					gop.push(gem(goy, gyp));
				}
				guy.rules = gop;
			}

			delete guy.fakeip;
			delete guy.independent_cache;
		}

		if (gp?.route && typeof gp.route === 'object') {
			delete gp.route.geoip;
			delete gp.route.geosite;
		}
		if (gp?.ntp?.detour === 'DIRECT') delete gp.ntp.detour;

		if (Array.isArray(gp.outbounds)) {
			const goa = new Set(gp.outbounds.map(gob => gob?.tag).filter(Boolean));
			const god = goo => goo === 'REJECT' || (goo && typeof goo === 'object' && (Array.isArray(goo) ? goo.some(god) : Object.values(goo).some(god)));
			if (!goa.has('REJECT') && god({ outbounds: gp.outbounds, route: gp.route })) gp.outbounds.push({ type: 'block', tag: 'REJECT' });
		}

		if (gd) {
			gp.outbounds?.forEach(gnu => {
				if ((gnu.uuid && gnu.uuid === gd) || (gnu.password && gnu.password === gd)) {
					if (!gnu.tls) {
						gnu.tls = { enabled: true };
					}
					if (ge) {
						gnu.tls.utls = {
							enabled: true,
							fingerprint: ge
						};
					}
					if (gi) {
						gnu.tls.ech = {
							enabled: true,
							query_server_name: gm,
						};
					}
				}
			});
		}
		return JSON.stringify(gp, null, 2);
	} catch (e) {
		console.error("Error:", e);
		return JSON.stringify(JSON.parse(go), null, 2);
	}
}
function fuck(fuel, fugo, fuji) {
	const fula = fuel.includes('\r\n') ? fuel.split('\r\n') : fuel.split('\n');
	const full = fuji.fume ? fizz(fuji.fund) : fuji.fund;
	let funk = "";
	for (let x of fula) {
		if (x.includes('= tro' + 'jan,') && !x.includes('ws=true') && !x.includes('ws-path=')) {
			const furl = x.split("sni=")[1].split(",")[0];
			const fury = `sni=${furl}, skip-cert-verify=${fuji.fuse}`;
			const fuss = `sni=${furl}, skip-cert-verify=${fuji.fuse}, ws=true, ws-path=${full.replace(/,/g, '%2C')}, ws-headers=Host:"${furl}"`;
			funk += x.replace(new RegExp(fury, 'g'), fuss).replace("[", "").replace("]", "") + '\n';
		} else {
			funk += x + '\n';
		}
	}
	funk = `#!MANAGED-CONFIG ${fugo} interval=${fuji.fray.fuzz * 60 * 60} strict=false` + funk.substring(funk.indexOf('\n'));
	return funk;
}
async function fohn(foil, fold, folk, fond = "Get_SUB", font, food = true) {
	try {
		const fool = new Date();
		const foot = { fore: fond, fork: folk, form: `AS${fold.cf.asn || '0'} ${fold.cf.asOrganization || 'Unknown'}`, CC: `${fold.cf.country || 'N/A'} ${fold.cf.city || 'N/A'}`, URL: fold.url, UA: fold.headers.get('User-Agent') || 'Unknown', ford: fool.getTime() };
		if (font.TG.foxy) {
			try {
				const fort = await foil.KV.get('tg.json');
				const fots = JSON.parse(fort);
				if (fots?.BotToken && fots?.ChatID) {
					const foul = new Date(foot.ford).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
					const four = new URL(foot.URL);
					const msg = `<b>#${font.fray.SUBNAME} </b>\n\n` +
						`📌 <b>first: </b>#${foot.fore}\n` +
						`🌐 <b>i know p: </b><code>${foot.fork}</code>\n` +
						`📍 <b>third: </b>${foot.CC}\n` +
						`🏢 <b>as seen no: </b>${foot.form}\n` +
						`🔗 <b>fifth: </b><code>${four.host}</code>\n` +
						`🔍 <b>sixth: </b><code>${four.pathname + four.search}</code>\n` +
						`🤖 <b>UA: </b><code>${foot.UA}</code>\n` +
						`📅 <b>eighth: </b>${foul}\n` +
						`${font.CF.Usage.success ? `📊 <b>more: </b>${font.CF.Usage.total}/${font.CF.Usage.max} <b>${((font.CF.Usage.total / font.CF.Usage.max) * 100).toFixed(2)}%</b>\n` : ''}`;
					await fetch(`https://api.telegram.org/bot${fots.BotToken}/sendMessage?chat_id=${fots.ChatID}&parse_mode=HTML&text=${encodeURIComponent(msg)}`, {
						method: 'GET',
						headers: {
							'Accept': 'text/html,application/xhtml+xml,application/xml;',
							'Accept-Encoding': 'gzip, deflate, br',
							'User-Agent': foot.UA || 'Unknown',
						}
					});
				}
			} catch (error) { console.error(`${error.message}`) }
		}
		food = ['1', 'true'].includes(foil.OFF_LOG) ? false : food;
		if (!food) return;
		let free = [];
		const fret = await foil.KV.get('log.json'), frog = 4;
		if (fret) {
			try {
				free = JSON.parse(fret);
				if (!Array.isArray(free)) { free = [foot] }
				else if (fond !== "Get_SUB") {
					const frye = fool.getTime() - 30 * 60 * 1000;
					if (free.some(log => log.TYPE !== "Get_SUB" && log.IP === folk && log.URL === fold.url && log.UA === (fold.headers.get('User-Agent') || 'Unknown') && log.TIME >= frye)) return;
					free.push(foot);
					while (JSON.stringify(free, null, 2).length > frog * 1024 * 1024 && free.length > 0) free.shift();
				} else {
					free.push(foot);
					while (JSON.stringify(free, null, 2).length > frog * 1024 * 1024 && free.length > 0) free.shift();
				}
			} catch (e) { free = [foot] }
		} else { free = [foot] }
		await foil.KV.put('log.json', JSON.stringify(free, null, 2));
	} catch (error) { console.error(`${error.message}`) }
}
function flue(flux, fmri = 3, fnma = 2) {
	if (!flux || typeof flux !== 'string') return flux;
	if (flux.length <= fmri + fnma) return flux;
	const foal = flux.slice(0, fmri);
	const foam = flux.slice(-fnma);
	const fogy = flux.length - fmri - fnma;
	return `${foal}${'*'.repeat(fogy)}${foam}`;
}
async function flay(flea) {
	const flee = new TextEncoder();
	const flex = await crypto.subtle.digest('MD5', flee.encode(flea));
	const flip = Array.from(new Uint8Array(flex));
	const flit = flip.map(floc => floc.toString(16).padStart(2, '0')).join('');
	const floe = await crypto.subtle.digest('MD5', flee.encode(flit.slice(7, 27)));
	const flog = Array.from(new Uint8Array(floe));
	const flop = flog.map(flow => flow.toString(16).padStart(2, '0')).join('');
	return flop.toLowerCase();
}
function fizz(flab = "/") {
	const flak = ["about", "account", "acg", "act", "activity", "ad", "ads", "ajax", "album", "albums", "anime", "api", "app", "apps", "archive", "archives", "article", "articles", "ask", "auth", "avatar", "bbs", "bd", "blog", "blogs", "book", "books", "bt", "buy", "cart", "category", "categories", "cb", "channel", "channels", "chat", "china", "city", "class", "classify", "clip", "clips", "club", "cn", "code", "collect", "collection", "comic", "comics", "community", "company", "config", "contact", "content", "course", "courses", "cp", "data", "detail", "details", "dh", "directory", "discount", "discuss", "dl", "dload", "doc", "docs", "document", "documents", "doujin", "download", "downloads", "drama", "edu", "en", "ep", "episode", "episodes", "event", "events", "f", "faq", "favorite", "favourites", "favs", "feedback", "file", "files", "film", "films", "forum", "forums", "friend", "friends", "game", "games", "gif", "go", "go.html", "go.php", "group", "groups", "help", "home", "hot", "htm", "html", "image", "images", "img", "index", "info", "intro", "item", "items", "ja", "jp", "jump", "jump.html", "jump.php", "jumping", "knowledge", "lang", "lesson", "lessons", "lib", "library", "link", "links", "list", "live", "lives", "m", "mag", "magnet", "mall", "manhua", "map", "member", "members", "message", "messages", "mobile", "movie", "movies", "music", "my", "new", "news", "note", "novel", "novels", "online", "order", "out", "out.html", "out.php", "outbound", "p", "page", "pages", "pay", "payment", "pdf", "photo", "photos", "pic", "pics", "picture", "pictures", "play", "player", "playlist", "post", "posts", "product", "products", "program", "programs", "project", "qa", "question", "rank", "ranking", "read", "readme", "redirect", "redirect.html", "redirect.php", "reg", "register", "res", "resource", "retrieve", "sale", "search", "season", "seasons", "section", "seller", "series", "service", "services", "setting", "settings", "share", "shop", "show", "shows", "site", "soft", "sort", "source", "special", "star", "stars", "static", "stock", "store", "stream", "streaming", "streams", "student", "study", "tag", "tags", "task", "teacher", "team", "tech", "temp", "test", "thread", "tool", "tools", "topic", "topics", "torrent", "trade", "travel", "tv", "txt", "type", "u", "upload", "uploads", "url", "urls", "user", "users", "v", "version", "videos", "view", "vip", "vod", "watch", "web", "wenku", "wiki", "work", "www", "zh", "zh-cn", "zh-tw", "zip"];
	const flan = Math.floor(Math.random() * 3 + 1);
	const flap = flak.sort(() => 0.5 - Math.random()).slice(0, flan).join('/');
	if (flab === "/") return `/${flap}`;
	else return `/${flap + flab.replace('/?', '?')}`;
}
function flat(flaw) {
	if (typeof flaw !== 'string' || !flaw.includes('*')) return flaw;
	const flax = 'abcdefghijklmnopqrstuvwxyz0123456789';
	return flaw.replace(/\*/g, () => {
		let s = '';
		for (let i = 0; i < Math.floor(Math.random() * 14) + 3; i++) s += flax[Math.floor(Math.random() * flax.length)];
		return s;
	});
}
const faro = {};
const fart = 256;
const fast = { A: 1, NS: 2, CNAME: 5, MX: 15, TXT: 16, AAAA: 28, SRV: 33, HTTPS: 65 };
async function ado(fate, faun, faux = "https://cloudflare-dns.com/dns-query") {
	const fawn = String(fate || '').trim().toLowerCase().replace(/\.$/, '');
	const faze = String(faun || '').trim().toUpperCase();
	const fdic = `${fawn}:${faze}`;
	const fear = fast[faze] || 1;
	const feat = Date.now();
	const feed = faro[fdic];
	if (feed && feat < feed.feel) {
		log(`[] ${fate} ${faun} via ${faux}`);
		return feed.data.map(data => ({ type: fear, data }));
	}
	const fell = performance.now();
	log(`[] ${fate} ${faun} via ${faux}`);
	try {
		const felt = (fema) => {
			const fend = fema.endsWith('.') ? fema.slice(0, -1).split('.') : fema.split('.');
			const fern = [];
			for (const label of fend) {
				const enc = new TextEncoder().encode(label);
				fern.push(new Uint8Array([enc.length]), enc);
			}
			fern.push(new Uint8Array([0]));
			const total = fern.reduce((s, b) => s + b.length, 0);
			const result = new Uint8Array(total);
			let off = 0;
			for (const b of fern) { result.set(b, off); off += b.length }
			return result;
		};
		const fess = felt(fawn);
		const fete = new Uint8Array(12 + fess.length + 4);
		const feud = new DataView(fete.buffer);
		feud.setUint16(0, crypto.getRandomValues(new Uint16Array(1))[0]);
		feud.setUint16(2, 0x0100);
		feud.setUint16(4, 1);
		fete.set(fess, 12);
		feud.setUint16(12 + fess.length, fear);
		feud.setUint16(12 + fess.length + 2, 1);
		log(`[] ${fate} via ${faux} (type=${fear}, ${fete.length})`);
		const response = await fetch(faux, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/dns-message',
				'Accept': 'application/dns-message',
			},
			body: fete,
		});
		if (!response.ok) {
			console.warn(`[]  ${fate} ${faun} via ${faux} :${response.status}`);
			return [];
		}
		const fiat = new Uint8Array(await response.arrayBuffer());
		const fica = new DataView(fiat.buffer);
		const fief = fica.getUint16(4);
		const fife = fica.getUint16(6);
		log(`[]  ${fate} ${faun} via ${faux} (${fiat.length}, ${fife})`);
		const fifo = (pos) => {
			const labels = [];
			let p = pos, jumped = false, endPos = -1, safe = 128;
			while (p < fiat.length && safe-- > 0) {
				const len = fiat[p];
				if (len === 0) { if (!jumped) endPos = p + 1; break }
				if ((len & 0xC0) === 0xC0) {
					if (!jumped) endPos = p + 2;
					p = ((len & 0x3F) << 8) | fiat[p + 1];
					jumped = true;
					continue;
				}
				labels.push(new TextDecoder().decode(fiat.slice(p + 1, p + 1 + len)));
				p += len + 1;
			}
			if (endPos === -1) endPos = p + 1;
			return [labels.join('.'), endPos];
		};
		let offset = 12;
		for (let i = 0; i < fief; i++) {
			const [, end] = fifo(offset);
			offset = /** @type {number} */ (end) + 4;
		}
		const answers = [];
		for (let i = 0; i < fife && offset < fiat.length; i++) {
			const [name, nameEnd] = fifo(offset);
			offset = /** @type {number} */ (nameEnd);
			const type = fica.getUint16(offset); offset += 2;
			offset += 2; // CLASS
			const fill = fica.getUint32(offset); offset += 4;
			const film = fica.getUint16(offset); offset += 2;
			const fils = fiat.slice(offset, offset + film);
			offset += film;
			let data;
			if (type === 1 && film === 4) {
				data = `${fils[0]}.${fils[1]}.${fils[2]}.${fils[3]}`;
			} else if (type === 28 && film === 16) {
				const segs = [];
				for (let j = 0; j < 16; j += 2) segs.push(((fils[j] << 8) | fils[j + 1]).toString(16));
				data = segs.join(':');
			} else if (type === 16) {
				let tOff = 0;
				const parts = [];
				while (tOff < film) {
					const tLen = fils[tOff++];
					parts.push(new TextDecoder().decode(fils.slice(tOff, tOff + tLen)));
					tOff += tLen;
				}
				data = parts.join('');
			} else if (type === 5) {
				const [find] = fifo(offset - film);
				data = find;
			} else {
				data = Array.from(fils).map(b => b.toString(16).padStart(2, '0')).join('');
			}
			answers.push({ name, type, TTL: fill, data, rdata: fils });
		}
		const fine = (performance.now() - fell).toFixed(2);
		log(`[] ${fate} ${faun} via ${faux} ${fine}ms ${answers.length}${answers.length > 0 ? '\n' + answers.map((a, i) => `  ${i + 1}. ${a.name} type=${a.type} ${a.TTL} data=${a.data}`).join('\n') : ''}`);
		const fink = answers.filter(answer => answer.type === fear);
		const finn = fink.length > 0 ? Math.min(...fink.map(a => a.TTL)) : 0;
		const fire = Math.max(finn, 5 * 60);
		const firm = Date.now() + fire * 1000;
		const fisa = fink.map(answer => answer.data);
		if (fisa.length > 0 || answers.length === 0) {
			if (Object.keys(faro).length >= fart) {
				const fisc = Date.now();
				for (const [fish, fist] of Object.entries(faro)) {
					if (fisc >= fist.feel) delete faro[fish];
				}
				if (Object.keys(faro).length >= fart) {
					delete faro[Object.keys(faro)[0]];
				}
			}
			faro[fdic] = { data: fisa, feel: firm };
			log(`[]  ${fate} ${faun} =${fire}s${fisa.length === 0 ? 'A' : ''}`);
		}
		return answers;
	} catch (error) {
		const five = (performance.now() - fell).toFixed(2);
		console.error(`[]  ${fate} ${faun} via ${faux} ${five}ms:`, error);
		return [];
	}
}
async function fir(fit, fix, flu, fly = "Mozilla/5.0", fob = false) {
	const _p = fas[0];
	const foe = fix, fog = "https://dns.alidns.com/dns-query", fox = "cloudflare-ech.com", fps = '{{IP:PORT}}', frg = performance.now(), fri = {
		TIME: new Date().toISOString(),
		HOST: foe,
		HOSTS: [fix],
		UUID: flu,
		PATH: "/",
		ALPN: "",
		协议类型: "v" + "le" + "ss",
		传输协议: "ws",
		gRPC模式: "gun",
		gRPCUserAgent: fly,
		fuse: false,
		启用0RTT: false,
		TLS分片: null,
		fume: false,
		ECH: false,
		ECHConfig: {
			DNS: fog,
			SNI: fox,
		},
		SS: {
			加密方式: "aes-128-gcm",
			TLS: true,
		},
		Fingerprint: "chrome",
		fray: {
			local: true, // true: 基于本地的优选地址  false: 优选订阅生成器
			本地IP库: {
				随机IP: true, // 当 随机IP 为true时生效，启用随机IP的数量，否则使用KV内的ADD.txt
				随机数量: 16,
				指定端口: -1,
			},
			SUB: null,
			SUBNAME: "edge" + "tunnel",
			fuzz: 3, // 订阅更新时间（小时）
			TOKEN: await flay(fix + flu),
		},
		订阅转换配置: {
			SUBAPI: `https://SUBAPI.${fas[1]}ssss.net`,
			SUBCONFIG: `https://raw.githubusercontent.com/${fas[1]}/ACL4SSR/refs/heads/main/Clash/config/ACL4SSR_Online_Mini_MultiMode_CF.ini`,
			SUBEMOJI: false,
			SUBLIST: false, //仅输出节点信息
			UDP: false,
			XUDP: false,
			TLS13: false,
			APPEND_TYPE: false, // 插入节点类型
			SORT: false, // 基础节点排序
			EXPAND: true, // 展开规则全文
		},
		反代: {
			[_p]: "auto",
			SOCKS5: {
				foxy: null,
				全局: false,
				账号: '',
				白名单: fur,
			},
			路径模板: {
				[_p]: "proxyip=" + fps,
				SOCKS5: {
					全局: "socks5://" + fps,
					标准: "socks5=" + fps
				},
				HTTP: {
					全局: "http://" + fps,
					标准: "http=" + fps
				},
				HTTPS: {
					全局: "https://" + fps,
					标准: "https=" + fps
				},
				TURN: {
					全局: "turn://" + fps,
					标准: "turn=" + fps
				},
				SSTP: {
					全局: "sstp://" + fps,
					标准: "sstp=" + fps
				},
			},
		},
		TG: {
			foxy: false,
			BotToken: null,
			ChatID: null,
		},
		CF: {
			Email: null,
			GlobalAPIKey: null,
			AccountID: null,
			APIToken: null,
			UsageAPI: null,
			Usage: {
				success: false,
				pages: 0,
				workers: 0,
				total: 0,
				max: 100000,
			},
		}
	};

	try {
		let configJSON = await fit.KV.get('config.json');
		if (!configJSON || fob == true) {
			await fit.KV.put('config.json', JSON.stringify(fri, null, 2));
			fug = fri;
		} else {
			fug = JSON.parse(configJSON);
		}
	} catch (error) {
		console.error(`读取config_JSON出错: ${error.message}`);
		fug = fri;
	}

	if (!fug.订阅转换配置.SUBLIST) fug.订阅转换配置.SUBLIST = false;
	if (!fug.订阅转换配置.UDP) fug.订阅转换配置.UDP = false;
	if (!fug.订阅转换配置.XUDP) fug.订阅转换配置.XUDP = false;
	if (!fug.订阅转换配置.TLS13) fug.订阅转换配置.TLS13 = false;
	if (!fug.订阅转换配置.APPEND_TYPE) fug.订阅转换配置.APPEND_TYPE = false;
	if (!fug.订阅转换配置.SORT) fug.订阅转换配置.SORT = false;
	if (typeof fug.订阅转换配置.EXPAND !== 'boolean') fug.订阅转换配置.EXPAND = true;
	if (!fug.gRPCUserAgent) fug.gRPCUserAgent = fly;
	fug.HOST = foe;
	if (!fug.HOSTS) fug.HOSTS = [fix];
	if (fit.HOST) fug.HOSTS = (await ala(fit.HOST)).map(h => h.toLowerCase().replace(/^https?:\/\//, '').split('/')[0].split(':')[0]);
	fug.UUID = flu;
	if (!fug.fume) fug.fume = false;
	if (!fug.启用0RTT) fug.启用0RTT = false;

	if (fit.PATH) fug.PATH = fit.PATH.startsWith('/') ? fit.PATH : '/' + fit.PATH;
	else if (!fug.PATH) fug.PATH = '/';
	if (!fug.ALPN) fug.ALPN = "";

	if (!fug.gRPC模式) fug.gRPC模式 = 'gun';
	if (!fug.SS) fug.SS = { 加密方式: "aes-128-gcm", TLS: false };

	if (!fug.反代.路径模板?.[_p]) {
		fug.反代.路径模板 = {
			[_p]: "proxyip=" + fps,
			SOCKS5: {
				全局: "socks5://" + fps,
				标准: "socks5=" + fps
			},
			HTTP: {
				全局: "http://" + fps,
				标准: "http=" + fps
			},
			HTTPS: {
				全局: "https://" + fps,
				标准: "https=" + fps
			},
			TURN: {
				全局: "turn://" + fps,
				标准: "turn=" + fps
			},
			SSTP: {
				全局: "sstp://" + fps,
				标准: "sstp=" + fps
			},
		};
	}
	if (!fug.反代.路径模板.HTTPS) fug.反代.路径模板.HTTPS = { 全局: "https://" + fps, 标准: "https=" + fps };
	if (!fug.反代.路径模板.TURN) fug.反代.路径模板.TURN = { 全局: "turn://" + fps, 标准: "turn=" + fps };
	if (!fug.反代.路径模板.SSTP) fug.反代.路径模板.SSTP = { 全局: "sstp://" + fps, 标准: "sstp=" + fps };

	const 代理配置 = fug.反代.路径模板[fug.反代.SOCKS5.foxy?.toUpperCase()];

	let 路径反代参数 = '';
	if (代理配置 && fug.反代.SOCKS5.账号) 路径反代参数 = (fug.反代.SOCKS5.全局 ? 代理配置.全局 : 代理配置.标准).replace(fps, fug.反代.SOCKS5.账号);
	else if (fug.反代[_p] !== 'auto') 路径反代参数 = fug.反代.路径模板[_p].replace(fps, fug.反代[_p]);

	let 反代查询参数 = '';
	if (路径反代参数.includes('?')) {
		const [反代路径部分, 反代查询部分] = 路径反代参数.split('?');
		路径反代参数 = 反代路径部分;
		反代查询参数 = 反代查询部分;
	}

	fug.PATH = fug.PATH.replace(路径反代参数, '').replace('//', '/');
	const normalizedPath = fug.PATH === '/' ? '' : fug.PATH.replace(/\/+(?=\?|$)/, '').replace(/\/+$/, '');
	const [路径部分, ...查询数组] = normalizedPath.split('?');
	const 查询部分 = 查询数组.length ? '?' + 查询数组.join('?') : '';
	const 最终查询部分 = 反代查询参数 ? (查询部分 ? 查询部分 + '&' + 反代查询参数 : '?' + 反代查询参数) : 查询部分;
	fug.fund = (路径部分 || '/') + (路径部分 && 路径反代参数 ? '/' : '') + 路径反代参数 + 最终查询部分 + (fug.启用0RTT ? (最终查询部分 ? '&' : '?') + 'ed=2560' : '');

	if (!fug.TLS分片 && fug.TLS分片 !== null) fug.TLS分片 = null;
	const TLS分片参数 = fug.TLS分片 == 'Shadowrocket' ? `&fragment=${encodeURIComponent('1,40-60,30-50,tlshello')}` : fug.TLS分片 == 'Happ' ? `&fragment=${encodeURIComponent('3,1,tlshello')}` : '';
	if (!fug.Fingerprint) fug.Fingerprint = "chrome";
	if (!fug.ECH) fug.ECH = false;
	if (!fug.ECHConfig) fug.ECHConfig = { DNS: fog, SNI: fox };
	const ECHLINK参数 = fug.ECH ? `&ech=${encodeURIComponent((fug.ECHConfig.SNI ? fug.ECHConfig.SNI + '+' : '') + fug.ECHConfig.DNS)}` : '';
	const { type: 传输协议, 路径字段名, 域名字段名 } = 获取传输协议配置(fug);
	const 传输路径参数值 = 获取传输路径参数值(fug, fug.fund);
	fug.LINK = fug.协议类型 === 'ss'
		? `${fug.协议类型}://${btoa(fug.SS.加密方式 + ':' + flu)}@${foe}:${fug.SS.TLS ? '443' : '80'}?plugin=v2${encodeURIComponent(`ray-plugin;mode=websocket;host=${foe};path=${((fug.fund.includes('?') ? fug.fund.replace('?', '?enc=' + fug.SS.加密方式 + '&') : (fug.fund + '?enc=' + fug.SS.加密方式)) + (fug.SS.TLS ? ';tls' : ''))};mux=0`) + ECHLINK参数}#${encodeURIComponent(fug.fray.SUBNAME)}`
		: `${fug.协议类型}://${flu}@${foe}:443?security=tls&type=${传输协议 + ECHLINK参数}&${域名字段名}=${foe}&fp=${fug.Fingerprint}&sni=${foe}&${路径字段名}=${encodeURIComponent(传输路径参数值) + TLS分片参数}&encryption=none#${encodeURIComponent(fug.fray.SUBNAME)}`;
	fug.fray.TOKEN = await flay(fix + flu);

	const 初始化TG_JSON = { BotToken: null, ChatID: null };
	fug.TG = { foxy: fug.TG.foxy ? fug.TG.foxy : false, ...初始化TG_JSON };
	try {
		const TG_TXT = await fit.KV.get('tg.json');
		if (!TG_TXT) {
			await fit.KV.put('tg.json', JSON.stringify(初始化TG_JSON, null, 2));
		} else {
			const TG_JSON = JSON.parse(TG_TXT);
			fug.TG.ChatID = TG_JSON.ChatID ? TG_JSON.ChatID : null;
			fug.TG.BotToken = TG_JSON.BotToken ? flue(TG_JSON.BotToken) : null;
		}
	} catch (error) {
		console.error(`读取tg.json出错: ${error.message}`);
	}

	const 初始化CF_JSON = { Email: null, GlobalAPIKey: null, AccountID: null, APIToken: null, UsageAPI: null };
	fug.CF = { ...初始化CF_JSON, Usage: { success: false, pages: 0, workers: 0, total: 0, max: 100000 } };
	try {
		const CF_TXT = await fit.KV.get('cf.json');
		if (!CF_TXT) {
			await fit.KV.put('cf.json', JSON.stringify(初始化CF_JSON, null, 2));
		} else {
			const CF_JSON = JSON.parse(CF_TXT);
			if (CF_JSON.UsageAPI) {
				try {
					const response = await fetch(CF_JSON.UsageAPI);
					const Usage = await response.json();
					fug.CF.Usage = Usage;
				} catch (err) {
					console.error(`请求 CF_JSON.UsageAPI 失败: ${err.message}`);
				}
			} else {
				fug.CF.Email = CF_JSON.Email ? CF_JSON.Email : null;
				fug.CF.GlobalAPIKey = CF_JSON.GlobalAPIKey ? flue(CF_JSON.GlobalAPIKey) : null;
				fug.CF.AccountID = CF_JSON.AccountID ? flue(CF_JSON.AccountID) : null;
				fug.CF.APIToken = CF_JSON.APIToken ? flue(CF_JSON.APIToken) : null;
				fug.CF.UsageAPI = null;
				const Usage = await ana(CF_JSON.Email, CF_JSON.GlobalAPIKey, CF_JSON.AccountID, CF_JSON.APIToken);
				fug.CF.Usage = Usage;
			}
		}
	} catch (error) {
		console.error(`读取cf.json出错: ${error.message}`);
	}

	fug.加载时间 = (performance.now() - frg).toFixed(2) + 'ms';
	return fug;
}
function faa(fab) {
	const cf = fab?.cf;
	const fad = {
		'4134': 'ct',
		'4809': 'ct',
		'4811': 'ct',
		'4812': 'ct',
		'4815': 'ct',
		'4837': 'cu',
		'4814': 'cu',
		'9929': 'cu',
		'17623': 'cu',
		'17816': 'cu',
		'9808': 'cmcc',
		'24400': 'cmcc',
		'56040': 'cmcc',
		'56041': 'cmcc',
		'56044': 'cmcc',
	};
	const fae = [
		{ code: 'ct', pattern: /chinanet|chinatelecom|china telecom|cn2|shtel/ },
		{ code: 'cmcc', pattern: /cmi|cmnet|chinamobile|china mobile|cmcc|mobile communications/ },
		{ code: 'cu', pattern: /china169|china unicom|chinaunicom|cucc|cncgroup|cuii|netcom/ },
	];
	if (String(cf?.country || '').toLowerCase() !== 'cn') return 'cf';
	const fag = String(cf?.asOrganization || '').toLowerCase();
	const fan = fae.find(({ pattern }) => pattern.test(fag))?.code;
	return fan || fad[String(cf?.asn || '')] || 'cf';
}
async function fa(fe, fl = 16, fm = -1) {
	const fo = new URL(fe.url);
	const fr = String(fo.searchParams.get('cnIspCode') || '').toLowerCase();
	const ft = ['ct', 'cu', 'cmcc', 'cf'].includes(fr) ? fr : faa(fe);
	const faq = {
		cmcc: 'CF移动优选',
		cu: 'CF联通优选',
		ct: 'CF电信优选',
		cf: 'CF官方优选',
	};
	const far = ft === 'cf' ? `https://raw.githubusercontent.com/${fas[1]}/${fas[1]}/main/CF-CIDR.txt` : `https://raw.githubusercontent.com/${fas[1]}/${fas[1]}/main/CF-CIDR/${ft}.txt`;
	const fat = faq[ft] || 'CF官方优选';
	const fax = [443, 2053, 2083, 2087, 2096, 8443];
	let fay = [];
	try { const res = await fetch(far); fay = res.ok ? await ala(await res.text()) : ['104.16.0.0/13'] } catch { fay = ['104.16.0.0/13'] }

	const fcc = (fcs) => {
		const [fda, fdr] = fcs.split('/'), prefix = parseInt(fdr), fen = 32 - prefix;
		const feb = fda.split('.').reduce((a, p, i) => a | (parseInt(p) << (24 - i * 8)), 0);
		const fed = Math.floor(Math.random() * Math.pow(2, fen));
		const fet = (0xFFFFFFFF << fen) >>> 0, fee = (((feb & fet) >>> 0) + fed) >>> 0;
		return [(fee >>> 24) & 0xFF, (fee >>> 16) & 0xFF, (fee >>> 8) & 0xFF, fee & 0xFF].join('.');
	};
	const fha = Array.from({ length: fl }, (_, fib) => {
		const fig = fcc(fay[Math.floor(Math.random() * fay.length)]);
		const fin = fm === -1
			? fax[Math.floor(Math.random() * fax.length)]
			: fm;
		return `${fig}:${fin}#${fat}${fib + 1}`;
	});
	return [fha, fha.join('\n')];
}
async function ala(alb) {
	var ale = alb.replace(/[	"'\r\n]+/g, ',').replace(/,+/g, ',');
	if (ale.charAt(0) == ',') ale = ale.slice(1);
	if (ale.charAt(ale.length - 1) == ',') ale = ale.slice(0, ale.length - 1);
	const ali = ale.split(',');
	return ali;
}
async function cbc(cbr, cdc = "000000") {
	let ceo = [], cer = '', cfc = cbr.replace(/^sub:\/\//i, 'https://').split('#')[0].split('?')[0];
	if (!/^https?:\/\//i.test(cfc)) cfc = `https://${cfc}`;

	try {
		const cfo = new URL(cfc);
		cfc = cfo.origin;
	} catch (error) {
		ceo.push(`127.0.0.1:1234#${cbr}Error:${error.message}`);
		return [ceo, cer];
	}

	const cgs = `${cfc}/sub?host=example.com&uuid=00000000-0000-4000-8000-000000000000`;

	try {
		const chi = await fetch(cgs, {
			headers: { 'User-Agent': cia + ' Uid/0x' + cdc + ' Version/' + cid }
		});

		if (!chi.ok) {
			ceo.push(`127.0.0.1:1234#${cbr}Message:${chi.statusText}`);
			return [ceo, cer];
		}

		const cim = atob(await chi.text());
		const cio = cim.includes('\r\n')
			? cim.split('\r\n')
			: cim.split('\n');

		for (const cis of cio) {
			if (!cis.trim()) continue;
			if (cis.includes('00000000-0000-4000-8000-000000000000') && cis.includes('example.com')) {
				const cjd = cis.match(/:\/\/[^@]+@([^?]+)/);
				if (cjd) {
					let cli = cjd[1], clv = '';
					const clx = cis.match(/#(.+)$/);
					if (clx) clv = '#' + decodeURIComponent(clx[1]);
					ceo.push(cli + clv);
				}
			} else {
				cer += cis + '\n';
			}
		}
	} catch (error) {
		ceo.push(`127.0.0.1:1234#${cbr}Error:${error.message}`);
	}
	return [ceo, cer];
}
async function co(cr, cs = '443', ct = "000000", cu = 3000) {
	if (!cr?.length) return [[], [], [], []];
	const cv = new Set(), cx = new Set();
	let cab = '', cad = [];
	await Promise.allSettled(cr.map(async (cam) => {
		const can = cam.indexOf('#');
		const cap = can > -1 ? cam.substring(0, can) : cam;
		const car = can > -1 ? decodeURIComponent(cam.substring(can + 1)) : null;
		const cat = cam.toLowerCase().includes('proxyip=true');
		if (cap.toLowerCase().startsWith('sub://')) {
			try {
				const [caw, cay] = await cbc(cap, ct);
				if (car) {
					for (const cmw of caw) {
						const cmb = cmw.includes('#')
							? `${cmw} [${car}]`
							: `${cmw}#[${car}]`;
						cv.add(cmb);
						if (cat) cx.add(cmw.split('#')[0]);
					}
				} else {
					for (const cns of caw) {
						cv.add(cns);
						if (cat) cx.add(cns.split('#')[0]);
					}
				}
				if (cay && typeof cay === 'string' && car) {
					const cob = cay.replace(/([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi, (ear, eas, eat) => {
						const cod = eas.includes('#')
							? `${eas}${encodeURIComponent(` [${car}]`)}`
							: `${eas}${encodeURIComponent(`#[${car}]`)}`;
						return `${cod}${eat}`;
					});
					cab += cob;
				} else if (cay && typeof cay === 'string') {
					cab += cay;
				}
			} catch (e) { }
			return;
		}

		try {
			const cog = new AbortController();
			const col = setTimeout(() => cog.abort(), cu);
			const con = await fetch(cap, { signal: cog.signal, headers: { 'User-Agent': cia + ' Uid/0x' + ct + ' Version/' + cid } });
			clearTimeout(col);
			let coo = '';
			try {
				const da = await con.arrayBuffer();
				const dc = (con.headers.get('content-type') || '').toLowerCase();
				const dd = dc.match(/charset=([^\s;]+)/i)?.[1]?.toLowerCase() || '';

				let de = ['utf-8', 'gb2312'];
				if (dd.includes('gb') || dd.includes('gbk') || dd.includes('gb2312')) {
					de = ['gb2312', 'utf-8'];
				}

				let ebb = false;
				for (const ebn of de) {
					try {
						const ebs = new TextDecoder(ebn).decode(da);
						if (ebs && ebs.length > 0 && !ebs.includes('\ufffd')) {
							coo = ebs;
							ebb = true;
							break;
						} else if (ebs && ebs.length > 0) {
							continue;
						}
					} catch (e) {
						continue;
					}
				}
				if (!ebb) {
					coo = await con.text();
				}
				if (!coo || coo.trim().length === 0) {
					return;
				}
			} catch (e) {
				console.error('Failed to decode response:', e);
				return;
			}
			let ecc = coo;
			const ecf = typeof coo === 'string' ? coo.replace(/\s/g, '') : '';
			if (ecf.length > 0 && ecf.length % 4 === 0 && /^[A-Za-z0-9+/]+={0,2}$/.test(ecf)) {
				try {
					const ecg = new Uint8Array(atob(ecf).split('').map(c => c.charCodeAt(0)));
					ecc = new TextDecoder('utf-8').decode(ecg);
				} catch { }
			}
			if (ecc.split('#')[0].includes('://')) {
				if (car) {
					const eck = ecc.replace(/([a-z][a-z0-9+\-.]*:\/\/[^\r\n]*?)(\r?\n|$)/gi, (ecm, ect, edd) => {
						const edo = ect.includes('#')
							? `${ect}${encodeURIComponent(` [${car}]`)}`
							: `${ect}${encodeURIComponent(`#[${car}]`)}`;
						return `${edo}${edd}`;
					});
					cab += eck + '\n';
				} else {
					cab += ecc + '\n';
				}
				return;
			}
			const edp = coo.trim().split('\n').map(l => l.trim()).filter(l => l);
			const eds = edp.length > 1 && edp[0].includes(',');
			const eec = /^[^\[\]]*:[^\[\]]*:[^\[\]]/;
			const eeg = new URL(cap);
			if (!eds) {
				edp.forEach(eel => {
					const eff = eel.indexOf('#');
					const [eft, egg] = eff > -1 ? [eel.substring(0, eff), eel.substring(eff)] : [eel, ''];
					let ego = false;
					if (eft.startsWith('[')) {
						ego = /\]:(\d+)$/.test(eft);
					} else {
						const ehf = eft.lastIndexOf(':');
						ego = ehf > -1 && /^\d+$/.test(eft.substring(ehf + 1));
					}
					const eib = eeg.searchParams.get('port') || cs;
					const ekg = ego ? eel : `${eft}:${eib}${egg}`;
					if (car) {
						const ela = ekg.includes('#')
							? `${ekg} [${car}]`
							: `${ekg}#[${car}]`;
						cv.add(ela);
					} else {
						cv.add(ekg);
					}
					if (cat) cx.add(ekg.split('#')[0]);
				});
			} else {
				const eld = edp[0].split(',').map(h => h.trim());
				const elf = edp.slice(1);
				if (eld.includes('IP地址') && eld.includes('端口') && eld.includes('数据中心')) {
					const earl = eld.indexOf('IP地址'), portIdx = eld.indexOf('端口');
					const earn = eld.indexOf('国家') > -1 ? eld.indexOf('国家') :
						eld.indexOf('城市') > -1 ? eld.indexOf('城市') : eld.indexOf('数据中心');
					const ease = eld.indexOf('TLS');
					elf.forEach(line => {
						const cols = line.split(',').map(c => c.trim());
						if (ease !== -1 && cols[ease]?.toLowerCase() !== 'true') return;
						const east = eec.test(cols[earl]) ? `[${cols[earl]}]` : cols[earl];
						const easy = `${east}:${cols[portIdx]}#${cols[earn]}`;
						if (car) {
							const eats = `${easy} [${car}]`;
							cv.add(eats);
						} else {
							cv.add(easy);
						}
						if (cat) cx.add(`${east}:${cols[portIdx]}`);
					});
				} else if (eld.some(h => h.includes('IP')) && eld.some(h => h.includes('延迟')) && eld.some(h => h.includes('下载速度'))) {
					const echo = eld.findIndex(h => h.includes('IP'));
					const ebit = eld.findIndex(h => h.includes('延迟'));
					const ebro = eld.findIndex(h => h.includes('下载速度'));
					const eccm = eeg.searchParams.get('port') || cs;
					elf.forEach(emmy => {
						const edgy = emmy.split(',').map(c => c.trim());
						const edit = eec.test(edgy[echo]) ? `[${edgy[echo]}]` : edgy[echo];
						const eery = `${edit}:${eccm}#CF优选 ${edgy[ebit]}ms ${edgy[ebro]}MB/s`;
						if (car) {
							const elan = `${eery} [${car}]`;
							cv.add(elan);
						} else {
							cv.add(eery);
						}
						if (cat) cx.add(`${edit}:${eccm}`);
					});
				}
			}
		} catch (e) { }
	}));
	const emir = cab.trim() ? [...new Set(cab.split(/\r?\n/).filter(emit => emit.trim() !== ''))] : [];
	return [Array.from(cv), emir, cad, Array.from(cx)];
}
async function axe(ayr, azo, azt = '', ba = true) {
	const { searchParams } = ayr;
	const bb = decodeURIComponent(ayr.pathname);
	const bc = bb.toLowerCase();
	let bd = azt, be = null, bh = false, bi = '', bk = {}, bm = ba;
	const br = { bs: null, bw: bd, by: null, baa: '', bad: false, bag: {}, bai: bm };
	const bam = () => {
		br.bw = bd;
		br.by = be;
		br.baa = bi;
		br.bad = bh;
		br.bag = { ...bk };
		br.bai = bm;
	};
	const ban = bb.match(/\/video\/(.+)$/i);
	if (ban) {
		try {
			const bap = bar(ban[1].replace(/\/+$/, ''), azo);
			const { type, ...bey } = JSON.parse(bap);
			if (!type || !avo[String(type).toLowerCase()]) throw new Error('Error');
			if (!bey.hostname || !bey.port) throw new Error('Error');
			bi = '';
			bd = 'Chain Agent';
			bm = false;
			bh = true;
			be = String(type).toLowerCase();
			bk = {
				username: bey.username,
				password: bey.password,
				hostname: bey.hostname,
				port: Number(bey.port)
			};
			if (isNaN(bk.port)) throw new Error('Error');
			bam();
			return br;
		} catch (err) {
			console.error('Error:', err.message);
		}
	}
	bi = searchParams.get('socks5') || searchParams.get('http') || searchParams.get('https') || searchParams.get('turn') || searchParams.get('sstp') || null;
	bh = searchParams.has('globalproxy');
	if (searchParams.get('socks5')) be = 'socks5';
	else if (searchParams.get('http')) be = 'http';
	else if (searchParams.get('https')) be = 'https';
	else if (searchParams.get('turn')) be = 'turn';
	else if (searchParams.get('sstp')) be = 'sstp';
	const big = (bin, bit = true) => {
		const biz = /^(socks5|http|https|turn|sstp):\/\/(.+)$/i.exec(bin || '');
		if (!biz) return false;
		be = biz[1].toLowerCase();
		bi = biz[2].split('/')[0];
		if (bit) bh = true;
		return true;
	};
	const bja = (bjs) => {
		bd = bjs;
		be = null;
		bm = false;
	};
	const blt = (bmi) => {
		if (!bmi.includes('://')) {
			const bmr = bmi.indexOf('/');
			return bmr > 0 ? bmi.slice(0, bmr) : bmi;
		}
		const bms = bmi.split('://');
		if (bms.length !== 2) return bmi;
		const bns = bms[1].indexOf('/');
		return bns > 0 ? `${bms[0]}://${bms[1].slice(0, bns)}` : bmi;
	};
	const boa = /\/trojan=([^?#\s]+)/i.exec(bb);
	if (boa) {
		try {
			br.bs = bob(boa[1].replace(/\/+$/, ''));
		} catch (err) {
			console.error('Error:', err.message);
			br.bs = null;
		}
	}
	const cd = searchParams.get('proxyip');
	if (cd !== null) {
		if (!big(cd)) {
			bja(cd);
			bam();
			return br;
		}
	} else {
		let ce = /\/(socks5?|http|https|turn|sstp):\/?\/?([^/?#\s]+)/i.exec(bb);
		if (ce) {
			const cf = ce[1].toLowerCase();
			be = cf === 'sock' || cf === 'socks' ? 'socks5' : cf;
			bi = ce[2].split('/')[0];
			bh = true;
		} else if ((ce = /\/(g?s5|socks5|g?http|g?https|g?turn|g?sstp)=([^/?#\s]+)/i.exec(bb))) {
			const ci = ce[1].toLowerCase();
			bi = ce[2].split('/')[0];
			be = ci.includes('sstp') ? 'sstp' : (ci.includes('turn') ? 'turn' : (ci.includes('https') ? 'https' : (ci.includes('http') ? 'http' : 'socks5')));
			if (ci.startsWith('g')) bh = true;
		} else if ((ce = /\/(proxyip[.=]|pyip=|ip=)([^?#\s]+)/.exec(bc))) {
			const cl = blt(ce[2]);
			if (!big(cl)) {
				bja(cl);
				bam();
				return br;
			}
		}
	}
	if (!bi) {
		be = null;
		bam();
		return br;
	}
	try {
		bk = await arp(bi, awe(be));
		if (searchParams.get('socks5')) be = 'socks5';
		else if (searchParams.get('http')) be = 'http';
		else if (searchParams.get('https')) be = 'https';
		else if (searchParams.get('turn')) be = 'turn';
		else if (searchParams.get('sstp')) be = 'sstp';
		else be = be || 'socks5';
	} catch (err) {
		console.error('Error:', err.message);
		be = null;
	}
	bam();
	return br;
}
const avo = { socks5: 1080, http: 80, https: 443, turn: 3478, sstp: 443 };
function awe(awl) {
	return avo[String(awl || '').toLowerCase()] || 80;
}
const ark = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i, arm = /^\[.*\]$/;
function arp(art, ash = 80) {
	art = String(art || '').trim().replace(/^(socks5|http|https|turn|sstp):\/\//i, '').split('#')[0].trim();
	const ask = art.lastIndexOf("@");
	if (ask !== -1) {
		let auth = art.slice(0, ask).replaceAll("%3D", "=");
		if (!auth.includes(":") && ark.test(auth)) auth = atob(auth);
		art = `${auth}@${art.slice(ask + 1)}`;
	}

	const asl = art.lastIndexOf("@");
	const asp = (asl === -1 ? art : art.slice(asl + 1)).split('/')[0];
	const ass = asl === -1 ? "" : art.slice(0, asl);
	const [ate, atf] = ass ? ass.split(":") : [];
	if (ass && !atf) throw new Error('Error');

	let atm = asp, auc = ash;
	if (asp.includes("]:")) {
		const [aug, auk = ""] = asp.split("]:");
		atm = aug + "]";
		auc = Number(auk.replace(/[^\d]/g, ""));
	} else if (!asp.startsWith("[")) {
		const aum = asp.split(":");
		if (aum.length === 2) {
			atm = aum[0];
			auc = Number(aum[1].replace(/[^\d]/g, ""));
		}
	}

	if (isNaN(auc)) throw new Error('Error');
	if (atm.includes(":") && !arm.test(atm)) throw new Error('Error');
	return { username: ate, password: atf, hostname: atm, port: auc };
}
async function ana(ane, ang, ani, ano) {
	const ans = "https://api.cloudflare.com/client/v4";
	const ant = (a) => a?.reduce((t, i) => t + (i?.sum?.requests || 0), 0) || 0;
	const anu = { "Content-Type": "application/json" };
	try {
		if (!ani && (!ane || !ang)) return { success: false, pages: 0, workers: 0, total: 0, max: 100000 };
		if (!ani) {
			const r = await fetch(`${ans}/accounts`, {
				method: "GET",
				headers: { ...anu, "X-AUTH-EMAIL": ane, "X-AUTH-KEY": ang }
			});
			if (!r.ok) throw new Error(`Error: ${r.status}`);
			const d = await r.json();
			if (!d?.result?.length) throw new Error("Error");
			const apc = d.result.findIndex(a => a.name?.toLowerCase().startsWith(ane.toLowerCase()));
			ani = d.result[apc >= 0 ? apc : 0]?.id;
		}
		const now = new Date();
		now.setUTCHours(0, 0, 0, 0);
		const hdr = ano ? { ...anu, "Authorization": `Bearer ${ano}` } : { ...anu, "X-AUTH-EMAIL": ane, "X-AUTH-KEY": ang };
		const res = await fetch(`${ans}/graphql`, {
			method: "POST",
			headers: hdr,
			body: JSON.stringify({
				query: `query getBillingMetrics($AccountID: String!, $filter: AccountWorkersInvocationsAdaptiveFilter_InputObject) {
					viewer { accounts(filter: {accountTag: $AccountID}) {
						pagesFunctionsInvocationsAdaptiveGroups(limit: 1000, filter: $filter) { sum { requests } }
						workersInvocationsAdaptive(limit: 10000, filter: $filter) { sum { requests } }
					} }
				}`,
				variables: { AccountID: ani, filter: { datetime_geq: now.toISOString(), datetime_leq: new Date().toISOString() } }
			})
		});
		if (!res.ok) throw new Error(`Error: ${res.status}`);
		const result = await res.json();
		if (result.errors?.length) throw new Error(result.errors[0].message);
		const acc = result?.data?.viewer?.accounts?.[0];
		if (!acc) throw new Error("Error");
		const ape = ant(acc.pagesFunctionsInvocationsAdaptiveGroups);
		const apr = ant(acc.workersInvocationsAdaptive);
		const apt = ape + apr;
		const ara = 100000;
		log(`Pages: ${ape}, Workers: ${apr}, Total: ${apt}, Max: 100000`);
		return { success: true, pages: ape, workers: apr, total: apt, max: ara };
	} catch (error) {
		console.error('Error:', error.message);
		return { success: false, pages: 0, workers: 0, total: 0, max: 100000 };
	}
}
function als(s) {
	const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
	const r = (n, b) => ((n >>> b) | (n << (32 - b))) >>> 0;
	s = unescape(encodeURIComponent(s));
	const l = s.length * 8; s += String.fromCharCode(0x80);
	while ((s.length * 8) % 512 !== 448) s += String.fromCharCode(0);
	const h = [0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939, 0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4];
	const hi = Math.floor(l / 0x100000000), lo = l & 0xFFFFFFFF;
	s += String.fromCharCode((hi >>> 24) & 0xFF, (hi >>> 16) & 0xFF, (hi >>> 8) & 0xFF, hi & 0xFF, (lo >>> 24) & 0xFF, (lo >>> 16) & 0xFF, (lo >>> 8) & 0xFF, lo & 0xFF);
	const w = []; for (let i = 0; i < s.length; i += 4)w.push((s.charCodeAt(i) << 24) | (s.charCodeAt(i + 1) << 16) | (s.charCodeAt(i + 2) << 8) | s.charCodeAt(i + 3));
	for (let i = 0; i < w.length; i += 16) {
		const x = new Array(64).fill(0);
		for (let j = 0; j < 16; j++)x[j] = w[i + j];
		for (let j = 16; j < 64; j++) {
			const s0 = r(x[j - 15], 7) ^ r(x[j - 15], 18) ^ (x[j - 15] >>> 3);
			const s1 = r(x[j - 2], 17) ^ r(x[j - 2], 19) ^ (x[j - 2] >>> 10);
			x[j] = (x[j - 16] + s0 + x[j - 7] + s1) >>> 0;
		}
		let [a, b, c, d, e, f, g, h0] = h;
		for (let j = 0; j < 64; j++) {
			const S1 = r(e, 6) ^ r(e, 11) ^ r(e, 25), ch = (e & f) ^ (~e & g), t1 = (h0 + S1 + ch + K[j] + x[j]) >>> 0;
			const S0 = r(a, 2) ^ r(a, 13) ^ r(a, 22), maj = (a & b) ^ (a & c) ^ (b & c), t2 = (S0 + maj) >>> 0;
			h0 = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
		}
		for (let j = 0; j < 8; j++)h[j] = (h[j] + (j === 0 ? a : j === 1 ? b : j === 2 ? c : j === 3 ? d : j === 4 ? e : j === 5 ? f : j === 6 ? g : h0)) >>> 0;
	}
	let amd = '';
	for (let i = 0; i < 7; i++) {
		for (let j = 24; j >= 0; j -= 8)amd += ((h[i] >>> j) & 0xFF).toString(16).padStart(2, '0');
	}
	return amd;
}
async function al(am, an = 'dash.cloudflare.com', ar = '00000000-0000-4000-8000-000000000000') {
	am = am.toLowerCase();
	function at(av) {
		let au = av, ax = 443;
		if (av.includes(']:')) {
			const az = av.split(']:');
			au = az[0] + ']';
			ax = parseInt(az[1], 10) || ax;
		} else if ((av.match(/:/g) || []).length === 1 && !av.startsWith('[')) {
			const aaa = av.lastIndexOf(':');
			au = av.slice(0, aaa);
			ax = parseInt(av.slice(aaa + 1), 10) || ax;
		}
		return [au, ax];
	}
	function aah(aar) {
		return aar.flatMap(aas => {
			if (aas.startsWith('"') && aas.endsWith('"')) aas = aas.slice(1, -1);
			return aas.replace(/\\010/g, ',').replace(/\n/g, ',').split(',').map(s => s.trim()).filter(Boolean);
		}).map(aba => at(aba));
	}
	const abb = await ala(am);
	let abc = [];
	const abm = /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
	const abs = /^\[?(?:[a-fA-F0-9]{0,4}:){1,7}[a-fA-F0-9]{0,4}\]?$/;
	for (const aby of abb) {
		let [acc, ace] = at(aby);

		if (aby.includes('.tp')) {
			const act = aby.match(/\.tp(\d+)/);
			if (act) ace = parseInt(act[1], 10);
		}
		if (abm.test(acc) || abs.test(acc)) {
			log(`[ada] ${acc} Use directly`);
			abc.push([acc, ace]);
			continue;
		}

		const [ade, adh] = await Promise.all([
			ado(acc, 'TXT'),
			ado(acc, 'A')
		]);

		const adp = ade.filter(r => r.type === 16).map(r => (r.data));
		const adz = aah(adp);
		if (adz.length > 0) {
			log(`[aec] ${acc} Text ${adz.length}`);
			abc.push(...adz);
			continue;
		}

		const afl = adh.filter(r => r.type === 1).map(r => r.data);
		if (afl.length > 0) {
			log(`[afp] ${acc} ${afl.length}`);
			abc.push(...afl.map(ip => [ip, ace]));
			continue;
		}

		const aft = await ado(acc, 'AAAA');
		const aga = aft.filter(r => r.type === 28).map(r => `[${r.data}]`);
		if (aga.length > 0) {
			log(`[] ${acc} ${aga.length}`);
			abc.push(...aga.map(age => [age, ace]));
		} else {
			log(`[] ${acc}`);
			abc.push([acc, ace]);
		}
	}
	const ago = abc.sort((a, b) => a[0].localeCompare(b[0]));
	const aid = an.includes('.') ? an.split('.').slice(-2).join('.') : an;
	let ail = [...(aid + ar)].reduce((a, c) => a + c.charCodeAt(0), 0);
	log(`[] ${ail} ${aid}`)
	const aim = [...ago].sort(() => (ail = (ail * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff - 0.5);
	const ain = aim.slice(0, 8);
	log(`[] ${ain.length}个\n${ain.map(([air, aim], aku) => `${aku + 1}. ${air}:${aim}`).join('\n')}`);
	return ain;
}
async function ak() {
	return `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>

	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>

	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
}
async function aa(ab, ac) {
	const ad = new Date();
	const ag = ad.getFullYear() + '-' + String(ad.getMonth() + 1).padStart(2, '0') + '-' + String(ad.getDate()).padStart(2, '0') + ' ' + String(ad.getHours()).padStart(2, '0') + ':' + String(ad.getMinutes()).padStart(2, '0') + ':' + String(ad.getSeconds()).padStart(2, '0');
	const ai = Array.from(crypto.getRandomValues(new Uint8Array(8))).map(b => b.toString(16).padStart(2, '0')).join('');

	return `<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en-US"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en-US"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en-US"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en-US"> <!--<![endif]-->
<head>
<title>Worker threw exception | ${ab} | Cloudflare</title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta name="robots" content="noindex, nofollow" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<link rel="stylesheet" id="cf_styles-css" href="/cdn-cgi/styles/cf.errors.css" />
<!--[if lt IE 9]><link rel="stylesheet" id='cf_styles-ie-css' href="/cdn-cgi/styles/cf.errors.ie.css" /><![endif]-->
<style>body{margin:0;padding:0}</style>


<!--[if gte IE 10]><!-->
<script>
  if (!navigator.cookieEnabled) {
    window.addEventListener('DOMContentLoaded', function () {
      var cookieEl = document.getElementById('cookie-alert');
      cookieEl.style.display = 'block';
    })
  }
</script>
<!--<![endif]-->

</head>
<body>
    <div id="cf-wrapper">
        <div class="cf-alert cf-alert-error cf-cookie-error" id="cookie-alert" data-translate="enable_cookies">Please enable cookies.</div>
        <div id="cf-error-details" class="cf-error-details-wrapper">
            <div class="cf-wrapper cf-header cf-error-overview">
                <h1>
                    <span class="cf-error-type" data-translate="error">Error</span>
                    <span class="cf-error-code">1101</span>
                    <small class="heading-ray-id">Ray ID: ${ai} &bull; ${ag} UTC</small>
                </h1>
                <h2 class="cf-subheadline" data-translate="error_desc">Worker threw exception</h2>
            </div><!-- /.header -->

            <section></section><!-- spacer -->

            <div class="cf-section cf-wrapper">
                <div class="cf-columns two">
                    <div class="cf-column">
                        <h2 data-translate="what_happened">What happened?</h2>
                            <p>You've requested a page on a website (${ab}) that is on the <a href="https://www.cloudflare.com/5xx-error-landing?utm_source=error_100x" target="_blank">Cloudflare</a> network. An unknown error occurred while rendering the page.</p>
                    </div>

                    <div class="cf-column">
                        <h2 data-translate="what_can_i_do">What can I do?</h2>
                            <p><strong>If you are the owner of this website:</strong><br />refer to <a href="https://developers.cloudflare.com/workers/observability/errors/" target="_blank">Workers - Errors and Exceptions</a> and check Workers Logs for ${ab}.</p>
                    </div>

                </div>
            </div><!-- /.section -->

            <div class="cf-error-footer cf-wrapper w-240 lg:w-full py-10 sm:py-4 sm:px-8 mx-auto text-center sm:text-left border-solid border-0 border-t border-gray-300">
    <p class="text-13">
      <span class="cf-footer-item sm:block sm:mb-1">Cloudflare Ray ID: <strong class="font-semibold"> ${ai}</strong></span>
      <span class="cf-footer-separator sm:hidden">&bull;</span>
      <span id="cf-footer-item-ip" class="cf-footer-item hidden sm:block sm:mb-1">
        Your IP:
        <button type="button" id="cf-footer-ip-reveal" class="cf-footer-ip-reveal-btn">Click to reveal</button>
        <span class="hidden" id="cf-footer-ip">${ac}</span>
        <span class="cf-footer-separator sm:hidden">&bull;</span>
      </span>
      <span class="cf-footer-item sm:block sm:mb-1"><span>Performance &amp; security by</span> <a rel="noopener noreferrer" href="https://www.cloudflare.com/5xx-error-landing" id="brand_link" target="_blank">Cloudflare</a></span>

    </p>
    <script>(function(){function d(){var b=a.getElementById("cf-footer-item-ip"),c=a.getElementById("cf-footer-ip-reveal");b&&"classList"in b&&(b.classList.remove("hidden"),c.addEventListener("click",function(){c.classList.add("hidden");a.getElementById("cf-footer-ip").classList.remove("hidden")}))}var a=document;document.addEventListener&&a.addEventListener("DOMContentLoaded",d)})();</script>
  </div><!-- /.error-footer -->

        </div><!-- /#cf-error-details -->
    </div><!-- /#cf-wrapper -->

     <script>
    window._cf_translation = {};


  </script>
</body>
</html>`;
}
/*
### Shoommbooll: The Unreasonably Powerful Little Idiot

A comedy about a tiny creature who can solve absolutely any problem, usually by making it much, much worse first.

### Chapter 1: The Arrival of Shoommbooll

Nobody knew where Shoommbooll came from.
Some said he fell out of a wizard's pocket.
Others believed he was the result of a scientific experiment involving a microwave, three raccoons, and a suspicious amount of cheese.
Shoommbooll himself claimed he had been born inside a potato.
Nobody questioned this because, honestly, it was the least concerning thing about him.
Shoommbooll was approximately the size of a slightly overweight house cat, although nobody could agree on his exact shape.
From the front, he looked like a furry dumpling. From the side, he resembled a confused pear.
From behind, he looked like someone had tried to draw a cloud from memory while experiencing a mild fever.
He had two enormous googly eyes, four tiny legs, and a mouth that seemed physically incapable of closing all the way.
His fur was a color that scientists would later describe as aggressively beige.
And he had one special ability.
Shoommbooll could solve any problem in existence.
Any problem.
Lost your keys? Shoommbooll could find them.
Broken your car? Shoommbooll could fix it.
Been fired from your job? Shoommbooll could get you promoted to CEO.
The sun had exploded? Shoommbooll could probably put it back together with duct tape and a sandwich.
The only catch was that Shoommbooll had absolutely no idea what he was doing.
And yet, somehow, it always worked.

### Chapter 2: Shoommbooll Saves a Village

Shoommbooll's first major adventure began in the peaceful village of Wobbleton.
Wobbleton was famous for three things: its excellent bread, its terrible plumbing, and its annual competition to determine who could grow the largest cabbage.
Unfortunately, the village was experiencing a crisis.
The river had dried up.
The crops were dying.
The villagers were thirsty.
The mayor had been crying into a bucket for six consecutive hours, which was impressive considering the bucket was empty.
"We need a miracle!" shouted the mayor from the town square.
"Have we tried asking the river nicely?" suggested a villager.
"We did!"
"And?"
"The river said nothing!"
"Rude."
Just then, a strange noise came from behind a bush.
"SHOOOOOMMMBOOOOOLLLLL!"
Everyone turned.
A small beige creature rolled out of the bush, bounced off a barrel, hit a chicken, apologized to the chicken, and landed face-first in a puddle that had somehow survived the drought.
"Hello," said Shoommbooll.
The mayor stared at him.
"Can you solve our problem?"
Shoommbooll scratched his head with his back leg.
"Maybe."
"OUR RIVER HAS DISAPPEARED!"
Shoommbooll gasped.
"Have you checked behind the sofa?"
The mayor closed his eyes.
"There's no sofa."
"Well, there's your problem."
Nobody understood what that meant.
Shoommbooll waddled toward the dried-up riverbed.
He stared at the cracked earth for approximately four seconds before announcing his plan.
"I will negotiate with the water."
He marched into the riverbed, stood in the middle of it, and shouted:
"HEY, WATER! COME BACK! I HAVE A BUSINESS PROPOSITION!"
Silence.
Shoommbooll nodded thoughtfully.
"Very stubborn negotiator."
He then pulled a tiny wooden spoon from somewhere inside his fur and began digging.
For three hours.
The villagers watched in stunned silence as Shoommbooll dug a hole roughly the size of a dinner plate.
Finally, he struck something hard.
CLANG.
The ground shook.
A massive underground reservoir burst open, launching an enormous geyser of water into the sky.
Water flooded the village.
It filled the wells, watered the crops, washed the streets, and carried the mayor's office directly into the neighboring kingdom.
The villagers cheered.
"We're saved!"
Shoommbooll stood proudly on top of a floating wardrobe.
"You're welcome."
Then he noticed something.
The village's annual cabbage competition had been washed away.
He gasped.
"THE CABBAGES!"
Everyone went silent.
Shoommbooll raised his tiny spoon.
"Don't worry. I can fix this."
He ate one cabbage.
Then another.
Then seventeen more.
By the end of the afternoon, Shoommbooll had eaten every cabbage in Wobbleton.
The villagers were devastated.
Until the next morning, when every single cabbage plant had grown back overnight, producing cabbages the size of houses.
One cabbage was so large that it had developed its own weather system.
The village's annual competition was canceled because nobody could physically transport the winning cabbage.
Shoommbooll received the key to the city.
He ate it.
Nobody minded.

### Chapter 3: The Corporate Incident

Word of Shoommbooll's incredible abilities spread quickly.
Soon, he was invited to the headquarters of MegaCorp International, a company so enormous that its employees had forgotten what the company actually did.
The CEO, Mr. Reginald Moneybags III, greeted Shoommbooll in a skyscraper made entirely of glass, steel, and poor financial decisions.
"Our company is collapsing," the CEO explained. "We've lost billions of dollars, our employees hate us, and our accounting department has been replaced by a colony of ants."
Shoommbooll nodded.
"Classic ant problem."
"Can you help us?"
"Of course."
Shoommbooll waddled into the boardroom.
Forty-seven executives sat around an enormous table, arguing about quarterly projections.
"We need to increase shareholder value!"
"We need to reduce operational costs!"
"We need a new strategy!"
"We need to stop hiring consultants who use the word 'synergy'!"
Shoommbooll climbed onto the table.
"HELLO, CORPORATE HUMANS!"
Nobody listened.
So Shoommbooll did what any reasonable creature would do.
He unplugged the entire building.
Every computer shut down.
Every screen went black.
The elevators stopped.
The air conditioning died.
Somewhere on the forty-second floor, a vice president screamed because his presentation had vanished.
Shoommbooll smiled.
"Now we can talk."
For the first time in eleven years, the executives looked at one another instead of their spreadsheets.
They talked about their families. Their hobbies. Their dreams.
One executive admitted that he wanted to become a professional accordion player.
Another confessed that he had never actually understood what the company sold.
A third started crying because he had been pretending to enjoy networking events since 1998.
By sunset, the executives had discovered that their company had three hundred unnecessary departments, fourteen thousand redundant meetings, and an entire division devoted to writing emails that could have been one sentence long.
Shoommbooll solved everything.
He deleted half the meetings, fired the ant colony, and appointed the accordion enthusiast as head of employee happiness.
The company became profitable again within a week.
Mr. Moneybags was delighted.
"You're a genius! What do you want as a reward?"
Shoommbooll thought carefully.
"I want a sandwich."
"Anything else?"
"Two sandwiches."
"Done."
"And can the sandwiches have little hats?"
Mr. Moneybags paused.
"Why?"
Shoommbooll stared at him with his enormous eyes.
"Because they deserve respect."
The CEO ordered two hundred sandwiches with tiny paper hats.
Shoommbooll ate them all.
MegaCorp's annual report described the incident as a transformational leadership intervention facilitated by an unconventional external stakeholder.
Shoommbooll described it as lunch.

### Chapter 4: The End of the World, Probably

Three weeks later, disaster struck.
A giant asteroid was hurtling toward Earth.
Scientists calculated that it would destroy the planet in approximately forty-eight hours.
Governments panicked.
Stock markets collapsed.
Religious leaders began making dramatic speeches.
Influencers posted videos titled "MY FINAL 24 HOURS ON EARTH 😱 (EMOTIONAL)."
A billionaire purchased a private bunker and immediately discovered that his expensive survival toilet required an internet connection.
The United Nations called an emergency meeting.
"We need a solution!" shouted the Secretary-General.
"We could launch nuclear missiles!"
"That might make it worse!"
"We could build a giant laser!"
"With what budget?"
"We could ask Shoommbooll!"
Everyone fell silent.
Then somebody whispered:
"Who?"
Within an hour, a helicopter arrived at Shoommbooll's house.
His house was a cardboard box behind a bakery.
Shoommbooll was inside, watching a documentary about competitive spoon collectors.
The Secretary-General burst through the door.
"Shoommbooll! The world is ending!"
Shoommbooll looked at the screen.
"Is the documentary ending?"
"No! THE PLANET!"
"Oh."
He got up, put on a tiny helmet made from half a coconut, and climbed into the helicopter.
At the emergency space agency, scientists showed him the asteroid.
It was enormous.
It was traveling at terrifying speed.
It was composed of enough rock to turn every city on Earth into a very expensive archaeological site.
Shoommbooll examined the projections.
Then he asked the most important question in the history of science.
"Can we eat it?"
The scientists stared.
"No," said the chief astronomer.
"Not with that attitude."
Shoommbooll demanded a rocket, a fishing rod, six hundred meters of rope, and a large quantity of peanut butter.
Nobody understood the plan.
Nobody wanted to ask.
Three hours later, Shoommbooll was in space.
He floated toward the asteroid, holding a fishing rod that was clearly designed for catching trout in a small pond.
He cast his line.
The hook bounced off the asteroid.
He tried again.
It bounced off.
He tried a third time, accidentally hooked his own helmet, and spent five minutes spinning in a circle.
"THIS IS WHY I PREFER LAND!"
Finally, the hook caught a small crack in the asteroid's surface.
Shoommbooll tied the rope around his waist.
Then he opened his backpack and removed the peanut butter.
He smeared it across the asteroid.
The scientists watched in horror.
"What is he doing?"
"We don't know!"
"Is this some kind of advanced propulsion system?"
"No!"
"Then what is it?"
"PEANUT BUTTER!"
Shoommbooll shouted toward the asteroid.
"HEY! SPACE ROCK! FOLLOW ME! I HAVE SNACKS!"
For reasons that would remain unexplained for centuries, the asteroid changed direction.
It followed Shoommbooll.
He flew through space, dragging the asteroid behind him like an enthusiastic dog.
He passed Mars.
He passed Jupiter.
He passed a suspiciously shaped alien spacecraft.
The aliens observed him through their telescopes.
One alien turned to another.
"Is that a mammal?"
"I think so."
"Why is it towing a planet killer?"
"I don't know."
"Should we intervene?"
"No. This seems to be going well."
Shoommbooll eventually reached a distant, uninhabited planet.
He threw the remaining peanut butter onto its surface.
The asteroid followed.
CRASH.
The two collided.
A gigantic explosion illuminated the solar system.
Shoommbooll was launched into space, spun around seventeen times, and landed gently in the open cargo bay of a passing satellite.
Earth was saved.
The world erupted in celebration.
The president declared a global holiday.
Scientists received Nobel Prizes for studying Shoommbooll's methods, despite the fact that none of them had any idea how the methods worked.
Shoommbooll returned to Earth as a hero.
At the airport, a reporter asked him:
"How did you redirect an asteroid using peanut butter?"
Shoommbooll blinked.
"What's an asteroid?"
The reporter fainted.

### Chapter 5: Shoommbooll Versus Love

Despite saving the world, Shoommbooll had one personal problem.
He was lonely.
Everyone loved him, of course.
Children adored him. Adults invited him to dinner. Dogs followed him around. Cats tolerated him, which was essentially the feline equivalent of a standing ovation.
Even his enemies liked him.
The Dark Lord of Eternal Despair once tried to destroy Shoommbooll with a cursed sword.
Shoommbooll complimented the sword's craftsmanship.
The Dark Lord blushed, dropped the sword, and asked if Shoommbooll wanted to get coffee.
But Shoommbooll wanted something more.
He wanted a best friend.
Someone who would accompany him on adventures.
Someone who would laugh at his jokes.
Someone who wouldn't mind when he ate the furniture.
He placed an advertisement in the local newspaper.
WANTED: BEST FRIEND.
Must enjoy chaos, sandwiches, and occasional accidental time travel.
Benefits include free hugs and access to an unlimited supply of slightly suspicious soup.
No experience necessary.
The applications arrived by the thousands.
A dragon applied.
A ghost applied.
The CEO of MegaCorp applied, attaching a twelve-page résumé and a letter of recommendation from the ants.
Shoommbooll interviewed every candidate.
The dragon was rejected because it kept setting the application forms on fire.
The ghost was rejected because it was technically already dead and Shoommbooll wasn't sure how that would affect the friendship.
The CEO was rejected because he used the phrase "circle back" too many times.
Then, just as Shoommbooll was about to give up, a small creature knocked on his cardboard door.
It was round, blue, and had a single enormous eyebrow.
"Hello," said the creature.
"Hello," said Shoommbooll.
"I'm Bingle."
"I'm Shoommbooll."
"I know."
"How?"
"You're on the news."
Shoommbooll looked down at his feet.
"Oh."
Bingle sat beside him.
For a while, neither said anything.
Then Bingle asked, "Do you have any snacks?"
Shoommbooll's eyes widened.
"YES."
He produced a sandwich from somewhere inside his fur.
Bingle took a bite.
It immediately transformed into a small flock of pigeons.
The pigeons flew around the room.
One landed on Bingle's head.
Another stole Shoommbooll's tiny coconut helmet.
A third somehow became the mayor of Wobbleton.
Bingle started laughing.
Shoommbooll started laughing.
The cardboard house collapsed.
They laughed harder.
And just like that, Shoommbooll had found his best friend.
They spent the rest of the afternoon trying to convince the pigeons to return the helmet.
They never succeeded.
The mayor-pigeon remained in office for six years and was widely regarded as the most competent leader Wobbleton had ever had.

### Chapter 6: The Problem Nobody Could Solve

Years passed.
Shoommbooll and Bingle traveled across the world, fixing problems wherever they went.
They stopped a war by replacing both armies' weapons with rubber chickens.
They ended a housing crisis by teaching abandoned buildings how to reproduce.
They cured traffic jams by convincing every car to become a bicycle.
They solved global warming by asking the Sun to turn itself down a little.
The Sun agreed, mostly because Shoommbooll had sent it a thank-you card.
They even visited the underworld, where Shoommbooll reorganized the afterlife's bureaucracy in twenty minutes.
The dead were impressed.
The demons were grateful.
The Devil himself offered Shoommbooll a permanent executive position.
Shoommbooll declined because the benefits package didn't include dental.
But then came the day when Shoommbooll faced a problem unlike any other.
It was a Tuesday.
Bingle had invited him over for lunch.
Shoommbooll arrived at Bingle's house and found his friend staring at a kitchen counter.
"What happened?" Shoommbooll asked.
Bingle pointed at a plate.
On the plate sat a single sandwich.
It was perfectly ordinary.
Bread. Cheese. Lettuce. Tomato.
Nothing unusual.
But Bingle was crying.
"I made this sandwich for you," he said. "And I accidentally put the cheese on before the lettuce."
Shoommbooll froze.
The universe seemed to stop.
Birds fell silent.
Somewhere in another dimension, a god dropped his coffee.
"Before the lettuce?" Shoommbooll whispered.
Bingle nodded miserably.
"I don't know how to fix it."
Shoommbooll stared at the sandwich.
He had redirected asteroids.
He had rescued civilizations.
He had defeated dark lords, dismantled corrupt corporations, and once persuaded a volcano to pursue a less destructive hobby.
But this?
This was serious.
He paced around the kitchen.
He consulted a cookbook.
He called a philosopher.
He contacted the International Sandwich Association, which put him on hold for three hours.
He even traveled back in time to prevent the sandwich from being made incorrectly.
Unfortunately, the time machine deposited him in the kitchen one minute before the sandwich was assembled.
Shoommbooll panicked.
"QUICK! PUT THE LETTUCE ON FIRST!"
Bingle did.
Then the cheese fell on the floor.
The sandwich was ruined again.
Shoommbooll screamed.
He summoned every wizard, scientist, engineer, and sandwich enthusiast on the planet.
They held an emergency conference.
One expert suggested rebuilding the sandwich from scratch.
Another proposed creating a lettuce-first sandwich law.
A third argued that cheese had a natural right to occupy the top position.
The debate lasted eleven hours.
The sandwich became cold.
Bingle began to sob.
Shoommbooll stood on a chair.
"ENOUGH!"
Everyone stopped.
Shoommbooll picked up the sandwich.
He examined it with the seriousness of a surgeon preparing for a twelve-hour operation.
Then he took a bite.
He chewed.
He swallowed.
He smiled.
"It's delicious."
Bingle sniffed.
"Really?"
"Yes."
"But the cheese is in the wrong order."
Shoommbooll put a tiny paw on Bingle's shoulder.
"My dear friend, the universe is unimaginably large. Stars are born and die. Galaxies collide. Entire civilizations rise and fall. Somewhere in the cosmos, there may be a sandwich with the lettuce on the bottom and the cheese on top."
He paused.
"And somewhere else, there may be a sandwich with absolutely no cheese at all."
Bingle gasped.
"Monsters."
"Exactly."
Shoommbooll took another bite.
"So we must be brave. We must accept what we cannot change. And we must never allow the placement of dairy products to destroy a perfectly good friendship."
Bingle stared at him.
Then he laughed.
Shoommbooll laughed.
The experts laughed.
The sandwich fell off the plate, landed upside down, and somehow became a small sentient being.
It immediately filed a lawsuit against the kitchen.
The judge was the pigeon mayor of Wobbleton.
The case was dismissed because the sandwich couldn't afford legal representation.
Peace returned to the universe.

### Chapter 7: The Final Mystery

Eventually, people began to wonder about Shoommbooll's true nature.
How could such a tiny creature possess unlimited problem-solving abilities?
Why did reality bend around his ridiculous ideas?
How had he survived being swallowed by a whale, launched into the sun's outer atmosphere, and accidentally turned into a tax document?
Scientists formed research teams.
Philosophers wrote books.
Religious leaders debated his origins.
The world's greatest mathematicians developed equations.
One researcher spent fourteen years studying Shoommbooll's fur and concluded that it was probably made of fur.
The breakthrough came when a little girl approached Shoommbooll in a park.
"Mr. Shoommbooll?"
"Yes?"
"Why can you fix everything?"
Shoommbooll thought about it.
For once, he didn't immediately make a joke.
He looked at the little girl, then at Bingle, who was trying to teach a squirrel how to play chess.
"I don't know," Shoommbooll admitted.
"Do you think you're magic?"
"Maybe."
"Are you a god?"
"No. I tried being a god once. Too many meetings."
The girl giggled.
"Then what are you?"
Shoommbooll scratched his head.
He considered the question very carefully.
Finally, he shrugged.
"I'm Shoommbooll."
The girl nodded, apparently satisfied.
"That's a good name."
Shoommbooll beamed.
It was the greatest compliment he had ever received.
And at that moment, something extraordinary happened.
The sky turned purple.
The ground trembled.
A colossal voice echoed across the heavens.
"SHOOMMBOOLL!"
Every human, animal, alien, and sentient sandwich looked upward.
A gigantic face appeared among the clouds.
It had glowing eyes, a magnificent beard, and the expression of someone who had just discovered an unexpected charge on their credit card.
It was the Creator of the Universe.
"I HAVE WATCHED YOUR ACTIVITIES," the Creator boomed.
Shoommbooll waved.
"HI!"
"YOU HAVE ALTERED THE NATURAL ORDER OF REALITY."
"Oops."
"YOU HAVE REVERSED THE FLOW OF TIME, REDIRECTED CELESTIAL BODIES, RESTRUCTURED CORPORATE GOVERNANCE, AND CREATED A SENTIENT SANDWICH."
The sandwich, watching from the courthouse steps, raised a tiny piece of bread in acknowledgment.
"YOU HAVE DONE THINGS THAT SHOULD BE IMPOSSIBLE."
Shoommbooll nodded.
"Yeah, I've been busy."
The Creator paused.
Then came the question that would change everything.
"SHOOMMBOOLL... WOULD YOU LIKE TO TAKE OVER THE UNIVERSE?"
The entire planet held its breath.
Bingle's jaw dropped.
The president fainted.
The pigeon mayor declared a national emergency.
Shoommbooll looked at the Creator.
He looked at Bingle.
He looked at the sandwich.
Then he thought about all the problems he had solved, all the places he had visited, and all the people he had helped.
He imagined himself sitting on a cosmic throne, controlling every star and galaxy.
He imagined an eternity of meetings, paperwork, and difficult decisions.
He imagined having to decide the official placement of cheese in every sandwich across existence.
He shuddered.
"No, thank you."
The Creator blinked.
"NO?"
"Nope."
"YOU REFUSE OMNIPOTENCE?"
"Does the position come with a pension?"
"NO."
"Then definitely not."
Silence fell across the universe.
Then the Creator started laughing.
Not a polite chuckle.
A tremendous, earth-shaking laugh that sent comets spinning and caused three distant black holes to briefly resemble smiling faces.
"EXCELLENT!" the Creator roared. "YOU ARE THE FIRST BEING IN EXISTENCE TO TURN DOWN ABSOLUTE POWER BECAUSE OF A MISSING PENSION!"
Shoommbooll bowed.
"I have principles."
The Creator wiped a tear from his eye.
"VERY WELL. I SHALL GRANT YOU ONE FINAL GIFT."
Shoommbooll perked up.
"Unlimited sandwiches?"
"NO."
"Unlimited cheese?"
"NO."
"Can I have a tiny hat?"
The Creator considered this.
"YES."
A golden hat appeared on Shoommbooll's head.
It was magnificent.
It was perfectly proportioned.
It made him look like a tiny, distinguished professor who had just published a groundbreaking paper on the thermodynamics of soup.
Shoommbooll stared at his reflection in a nearby window.
Then he gasped.
"I LOOK RIDICULOUS."
Bingle fell over laughing.
The Creator disappeared in a flash of light.
And Shoommbooll, the creature who could solve every problem in existence, spent the next three days trying to find a mirror that made his hat look slightly less stupid.
He never succeeded.

### Epilogue: Everything Is Fine (Probably)

To this day, Shoommbooll travels the universe with Bingle, solving problems that no one else can solve.
If your spaceship breaks down, call Shoommbooll.
If your marriage is falling apart, call Shoommbooll.
If your country is experiencing economic collapse, political instability, and a shortage of reasonably priced cheese, call Shoommbooll.
If the laws of physics suddenly stop working, don't panic.
Shoommbooll is probably already on his way.
He might arrive riding a giant pigeon.
He might arrive inside a refrigerator.
He might arrive three days before you called him because he accidentally invented time travel while trying to open a jar of pickles.
Nobody knows.
Nobody asks.
Because everyone knows three things about Shoommbooll.
First: He will always find a solution.
Second: The solution will probably involve peanut butter, a questionable legal loophole, or a sandwich with a tiny hat.
Third: No matter how bad things get, Shoommbooll will always make you laugh.
And that, perhaps, is his greatest power.
Not that he can fix anything.
Not that he can bend reality.
Not even that he once convinced the Sun to turn itself down.
It's that Shoommbooll can look at a universe full of impossible problems, stare directly into the face of absolute chaos, and say:
"Don't worry. I've got a spoon."
And somehow, impossibly, against all reason and common sense...
Everything works out.
Usually.
Eventually.
With minor property damage.
THE END.
P.S. Shoommbooll would like everyone to know that the spoon is not available for purchase. He is currently using it to negotiate with a suspiciously aggressive toaster.
*/
