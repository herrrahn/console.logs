function showLogs() {
    // console.log(console)    
    typeOfLogs()
    logWithTable()
    logAsObject()
    logAssertions()
    groupingLogs()
    count()
    benchmarking()
    trace();
    stylingLogs();
}

function logWithTable() {
    logHeader('Display data/objects as a table')

    const dados = [0, 1, 3]
    console.table(dados)

    const person = {id: 1, name: 'Max', age: '88'}
    console.table(person)
}

function logAsObject() {
    logHeader('Display log as object')

    const foo = 'foo'
    const bar = 'bar'
    console.log({foo, bar})

    const person = {id: 1, name: 'Max', age: '88'}
    console.log(person)
    console.log({person})   
}

function typeOfLogs() {
    logHeader('Types of logs')

    console.log('just a normal log')
    console.warn('Warning....')
    console.error('Ups too late')
}

function logAssertions() {
    logHeader('Only display log if assertion fails')

    console.assert(1 > 0, '1 > 0')
    console.assert(1 < 0, '1 < 0')
}

function groupingLogs() {
    logHeader('Logs can be grouped')

    console.log('before the group')
    console.group('items')
    console.log('item 1')
    console.log('item 2')
    console.groupCollapsed('item 3')
    console.log('sub-item 1')
    console.log('sub-item 2')
    console.log('sub-item 3')
    console.groupEnd()
    console.log('item 4')
    console.groupEnd()
    console.log('out of the group')
}

function count() {
    logHeader('count - Increment each time is called for a gived label')
    console.count('count')
    console.count('count')
    console.count('count')
    console.count('count-1')
    console.count('count-1')
}

function benchmarking() {
    logHeader('Display the amount of time elapsed since timer is started')

    console.time('my-timer')
    for (let index = 0; index < 100000; index++) {
        if (index % 10000 === 0) {
            console.timeLog('my-timer', index)
        }
    }
    console.timeEnd('my-timer')
}

function trace() {
    logHeader('Display the stacktrace')
    console.trace('who called my?')
}

function stylingLogs() {
    console.log('%cDanke für Ihre Aufmerksamkeit %c🍻', 'color: green; font-weight: bold; background-color: #ddd', 'font-size: 18pt')
}

function logHeader(message) {
    console.log('%c' + message, 'color: green; font-weight: bold; font-family: courier; background-color: #ededed; font-size: 9pt')
}