/******************************************************************************
 *
 * MIT License
 *
 * Copyright (c) 2021 Web Service Development Inc.
 * Author : Benjamin Collins - collins@wsd.co.jp
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 *****************************************************************************/
 
import ChatworkApi from "chatwork-api-client";
import * as dotenv from "dotenv";

dotenv.config();
const api = new ChatworkApi(process.env.CHATWORK_TOKEN);

(async () => {
	const me = await api.getMe();
	const { name, account_id } = me;
	console.log( name );

	const rooms = await api.getRooms();
	console.log( rooms );

	const roomId = rooms[0].room_id;
	const options = {
		body : "Hello, World!!"
	}

	const res = await api.postRoomMessage( roomId, options);
	console.log( res );

})();
