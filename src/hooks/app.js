import { useSelector } from 'react-redux'

export const useFirebase = () => {
  return useSelector(state => state.app)
}

export const useCategoryData = (sportType) => {
  if (sportType === 'basketballMale') {
    return {
      text: '男籃',
      canVote: 3,
      sportCount: 'bbVC',
      pathName: 'basketball/male/candidates'
    }
  }
  if (sportType === 'basketballFemale') {
    return {
      text: '女籃',
      canVote: 3,
      sportCount: 'bgVC',
      pathName: 'basketball/female/candidates'
    }
  }
  if (sportType === 'volleyballMaleSetter') {
    return {
      text: '男排-舉球員',
      canVote: 2,
      sportCount: 'vbSetterVC',
      pathName: 'volleyball/male/setter'
    }
  }
  if (sportType === 'volleyballMaleLibero') {
    return {
      text: '男排-自由球員',
      canVote: 2,
      sportCount: 'vbLiberoVC',
      pathName: 'volleyball/male/libero'
    }
  }
  if (sportType === 'volleyballMaleSpiker') {
    return {
      text: '男排-快攻手',
      canVote: 3,
      sportCount: 'vbSpikerVC',
      pathName: 'volleyball/male/spiker'
    }
  }
  if (sportType === 'volleyballMaleEdgeLine') {
    return {
      text: '男排-邊線',
      canVote: 4,
      sportCount: 'vbEdgeLineVC',
      pathName: 'volleyball/male/edgeline'
    }
  }
  if (sportType === 'volleyballFemaleSetter') {
    return {
      text: '女排-舉球員',
      canVote: 4,
      sportCount: 'vgSetterVC',
      pathName: 'volleyball/female/setter'
    }
  }
  if (sportType === 'volleyballFemaleEdgeLine') {
    return {
      text: '女排-邊線',
      canVote: 6,
      sportCount: 'vgEdgeLineVC',
      pathName: 'volleyball/female/edgeline'
    }
  }
}
