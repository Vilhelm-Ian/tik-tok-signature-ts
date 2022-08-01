interface Signer {
	userAgent: string;
	args?: string[];
	url: string;
	browser?: string;
	//isExternalBrowser: boolean;
}

function New_Signer(userAgent: boolean, url: string) {
	return {
		userAgent,
		url,
	};
}
