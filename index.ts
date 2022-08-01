import { devices, chromium } from "playwright-chromium";

interface Options {
	args: string[];
	ignoreDefaultArgs: string[];
	ignoreHTTPsErrors: boolean;
}

interface Signer {
	userAgent: string;
	args: string[];
	options: Options;
	url: string;
	browser?: unknown;
	isExternalBrowser: boolean;
	context: unknown;
	page: unknown;
}

function New_Signer(this: Signer, userAgent: boolean, url: string) {
	return {
		userAgent,
		url,
		init,
	};
	async function init() {
		if (!this.browser()) {
			this.browser = await chromium.launch();
		}
	}
}
