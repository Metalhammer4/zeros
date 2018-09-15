module.exports = function getZerosCount(number) {
  // your implementation
count = 0
for (i = 5; i <= number; i *= 5)
{
count += Math.floor(number / i) 
if (Math.floor(number / i)  == 0) break
}
 return count
}