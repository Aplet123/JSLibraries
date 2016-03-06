##Documentation for ProcessDaJS
###processDaJS.randomNumber(min, max)
Used to generate a random number from a given minimum and maximum.

`min` - The minimum value of the number.

`max` - The maximum value of the number.
####Aliases
```
processDaJS.rNumber
processDaJS.rNum
```
###processDaJS.randomArray(array)
Used to generate a random element from a given array.

`array` - The array from which to pick a random element from.
####Aliases
```
processDaJS.rArray
processDaJS.rArr
```
###processDaJS.mean(array)
Used to find the mean of any given array.

`array` - The array of which to find the mean of.
####Aliases
```
--==NONE==--
```
###processDaJS.variance(array)
Used to find the unbiased variance of any given array.

`array` - The array of which to find the unbiased variance of.
####Aliases
```
--==NONE==--
```
###processDaJS.biasVariance(array)
Used to find the biased variance of any given array.

`array` - The array of which to find the biased variance of.
####Aliases
```
processDaJS.bVariance
```
###processDaJS.standardDeviation(array)
Used to find the unbiased standard deviation of any given array.

`array` - The array of which to find the unbiased standard deviation of.
####Aliases
```
processDaJS.stDeviation
processDaJS.stDev
```
###processDaJS.biasStandardDeviation(array)
Used to find the biased standard deviation of any given array.

`array` - The array of which to find the biased standard deviation of.
####Aliases
```
processDaJS.bStandardDeviation
processDaJS.bStDeviation
processDaJS.bStDev
```
###processDaJS.gaussianNumber(mean, stDev)
Used to generate a random number from a gaussian distribution from a given mean and standard deviation.

`mean` - The mean of the gaussian distribution.

`stDev` - The standard deviation of the gaussian distribution.
####Aliases
```
processDaJS.gNumber
processDaJS.gNum
```
###processDaJS.median(array)
Used to find the median of any given array.

`array` - The array of which to find the median of.
####Aliases
```
--==NONE==--
```
###processDaJS.range(array)
Used to find the range of any given array.

`array` - The array of which to find the range of.
####Aliases
```
--==NONE==--
```
###processDaJS.arrayToObject(array)
Used to convert any array to an object.

`array` - The array of which to convert to an object.
####Aliases
```
processDaJS.arrToObject
processDaJS.arrObject
processDaJS.arrObj
```
###processDaJS.objectToArray(object, keepName)
Used to convert any array to an object.

`object` - The object of which to convert to an array.

`keepName` - If the name of the elements should be kept in the array.
####Aliases
```
processDaJS.objToArray
processDaJS.objArray
processDaJS.objArr
```
###processDaJS.stringSplit(string)
Used to split a string into it's individual letters.

`string` - The string of which to split.
####Aliases
```
processDaJS.sSplit
processDaJS.sSpl
```
###processDaJS.realShift(array)
Used to cycle an array.

`name` - The array of which to cycle.
####Aliases
```
processDaJS.rShift
```
###processDaJS.stringToArray(string, seperator)
Used to convert a string seperated by a given seperator to an array.

`string` - The string of which to convert.

`seperator` - The seperator that is seperating the string.
####Aliases
```
processDaJS.strArray
processDaJS.strArr
```
###processDaJS.playAudio(src, start, end)
Used to play an audio with a given source, start time, and end time.

`src` - The source of the audio.

`start` - The start time of the audio(seconds).

`end` - The end time of the audio(seconds).
####Aliases
```
processDaJS.pAudio
processDaJS.pAud
```
###processDaJS.xor(boola, boolb)
Used to find the xor of two booleans.

`boola` - The first boolean.

`boolb` - The second boolean.
####Aliases
```
--==NONE==--
```
###processDaJS.xand(boola, boolb)
Used to find the xand of two booleans.

`boola` - The first boolean.

`boolb` - The second boolean.
####Aliases
```
--==NONE==--
```
###processDaJS.nor(boola, boolb)
Used to find the nor of two booleans.

`boola` - The first boolean.

`boolb` - The second boolean.
####Aliases
```
--==NONE==--
```
###processDaJS.nand(boola, boolb)
Used to find the nand of two booleans.

`boola` - The first boolean.

`boolb` - The second boolean.
####Aliases
```
--==NONE==--
```
##Classes
###new processDaJS.classes.Log()
Used to create a log.
####Properties
`log` - The log.
####Setters
`log` - Adds a new log entry.
####Methods
--==NONE==--
####Aliases
```
--==NONE==--
```
###new processDaJS.classes.ID()
Used to create a ID.
####Properties
`first` - The first name.

`middle` - The middle name.

`last` - The last name.

`address` - The house address.

`altAddress` - The optional other address.

`zipCode` - The zip code.

`country` - The country.

`city` - The city.

`email` - The email address.

`phone` - The phone number.

####Setters
--==NONE==--
####Methods
`IDString()` - Used to find the ID string.
####Aliases
```
--==NONE==--
##How to use processDaJS
Put the following script tag in your head before any other scripts.

```
<script src="http://projectaplet.comxa.com/libraries/ProcessDaJS.js" type="text/javascript" charset="UTF-8"></script>
```