export class Recipe{
    public recipe_name :string;
    public recipe_description : string;
    public recipe_img : string;

    constructor(recipe_name : string,recipe_description : string,recipe_img : string)
    {
        this.recipe_name = recipe_name
        this.recipe_description = recipe_description
        this.recipe_img = recipe_img

    }

}