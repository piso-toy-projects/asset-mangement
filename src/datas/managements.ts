interface management {
	title: string;
	percentage: number;
}

type managements = {
	total: number;
	/** 
        필수 지출
    */
	essential: management;
	/** 
        비상금
    */
	emergency: management;
	/** 
        저축 및 투자
    */
	savingsAndInvestment: management;
	/** 
        부동산 투자
    */
	realEstate: management;
	/** 
        자기 계발
    */
	personalDevelopment: management;
	/** 
        보험
    */
	insurance: management;
	/** 
        세금 및 기타
    */
	tax: management;
	/** 
        레저
    */
	leisure: management;
};

export default managements;
