import { getRepository } from 'typeorm';
import Commit from '../models/Commit';

interface Request {
  repository_id: string;
  student_id: string;
  message: string;
  additions: number;
  deletions: number;
  sha: string;
}

class CreateCommitService {
  async execute({
    student_id,
    repository_id,
    message,
    additions,
    deletions,
    sha,
  }: Request): Promise<Commit> {
    const commitsRepository = getRepository(Commit);

    const commit = commitsRepository.create({
      student_id,
      repository_id,
      message,
      additions,
      deletions,
      sha,
    });
    await commitsRepository.save(commit);

    return commit;
  }
}

export default CreateCommitService;
