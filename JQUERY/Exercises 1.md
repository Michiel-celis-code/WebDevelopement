# JQuery
![#f03c15](https://placehold.it/15/f03c15/000000?text=+) `Repetitive` ![#452AF7](https://placehold.it/15/452AF7/000000?text=+) `Excessively Iterated`  ![#15f0c5](https://placehold.it/15/15f0c5/000000?text=+) `Inproper format (scope)`
## 1 : Immidiate Actions
### 1.1. 
#### ● Adress element by ID Change property display to none
```
    $("#ID").hide();
```
### 1.2. 
#### ● Adress element by ID Change property display to block
```
    $("#ID").show();
```
### 1.3. 
#### ● Adress element by ID Change property font-family to Courier
```
    $("#ID").css('font-family','Courier');
```
### 1.4. 
#### ● Adress element by TAG Change property color to red
```
    $("TAG").css('color', 'red');
```
### 1.5. 
#### ● Adress element by ID Change InnerHTML to empty
```
    $("#ID").empty();
```
### 1.6. 
#### ● Adress element by CLASS Change property display to none
```
    $(".CLASS").hide();
```
### 1.7. 
#### ● Adress element by CLASS Change removeHTML
```
    $('.CLASS').remove();
```
### 1.8. 
#### ● Adress element by TAG in TAG Change property color to red
```
    $('TAG TAG').css('color', 'red');
```
### 1.9. 
#### ● Adress element by ID's Change property border to 5px dotted green
```
    $('#ID, #ID').css('border', '5px dotted green');
```
### 1.10. 
#### ● Adress element by ID add CLASS adressed in 6 / Hide subject CLASS
```
    $('#ID').attr('class', '.CLASS');
    $(".CLASS").hide();
```

## Summary
### Adressing Elements
#### ● Adress element by #ID TAG .CLASS
```
    $('ELEMENT').
```
#### ● Adress Multiple Elements
```
    $('ELEMENT , ELEMENT').
```
#### ● Adress Nested Element
```
    $('ELEMENT ELEMENT').
```
### Various actions
#### ● Change Visibility
```
    hide();
    show();
```
#### ● Change Property
```
    css('Property','Value');
```
#### ● Change Attribute
```
    attr('ATTRIBUTE', 'VALUE');
```
#### ● Remove InnerHTML 
```
    empty();
```
#### ● Remove HTML
```
    remove();
```
