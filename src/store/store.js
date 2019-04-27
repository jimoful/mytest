const stores = {
    state: {
        userName: "",
        balance: "",
        userInfo: {},
        recentRewardInfo: "",
        actionTime: 0,
        globalInfo: "",
        lowerBound: 0

    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setUserName(state, userName) {
            state.userName = userName;
        },
        setBalance(state, balance) {
            state.balance = balance;
        },
        setRecentRewardInfo(state, recentRewardInfo) {
            state.recentRewardInfo = recentRewardInfo;
        },
        setActionTime(state, actionTime) {
            state.actionTime = actionTime;
        },
    }
};
export default stores;
