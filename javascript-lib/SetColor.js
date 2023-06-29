class SetColors 
{
    constructor(red,blue,green)
    {
        this.Red = red;
        this.Blue = blue;
        this.Green = green;
    }
    RandomRgb = ()=>{    
        return `rgb(${this.Red},${this.Blue},${this.Green})`;
    }
}

export default SetColors;