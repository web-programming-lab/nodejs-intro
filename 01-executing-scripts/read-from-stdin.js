process.stdin.on('readable', () => {
    const something = process.stdin.read();
    if(something) {
        process.stdout.write(something);
    }
});