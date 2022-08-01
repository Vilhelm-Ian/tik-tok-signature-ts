import { devices, chromium, Browser } from "playwright-chromium";

interface Options {
	args: string[];
	ignoreDefaultArgs: string[];
	ignoreHTTPsErrors: boolean;
}

interface Signer {
	userAgent: string;
	args?: string[];
	options?: Options;
	url: string;
	browser?: Browser;
	isExternalBrowser?: boolean;
	context?: unknown;
	page?: unknown;
	init(): Promise<void>;
}

export function New_Signer(userAgent: string, url: string): Signer {
	return {
		userAgent,
		url,
		init,
	};
	async function init(this: Signer) {
		if (!this.browser) {
			this.browser = await chromium.launch();
		}
	}
}
