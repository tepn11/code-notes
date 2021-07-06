
function solution(X, Y, D) {
    if (X === Y) return 0;
    const distanceToCover = Y - X;
    const jumps = Math.ceil(distanceToCover / D);
    return jumps;
}