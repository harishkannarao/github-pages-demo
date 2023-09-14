export async function currentTime(): Promise<Date> {

    await new Promise((res) => setTimeout(res, 1000));

    return new Date();
}